import React,{Component} from 'react';
import NewNavbar from './NewNavbar';
import { Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";

class RaiseTicket extends Component{
    constructor(props) {
    super(props);

    this.state = {
      empid: "",
      ticket_name: "",
        summary:"",
        category:"Servers/Laptop"
    };
  }

  validateForm() {
    return this.state.empid.length > 0 && this.state.ticket_name.length > 0 && this.state.summary.length > 0;   
  }

  handleChange = event => {
      //console.log(event.target.id);    
      //console.log(event.target.value);    
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
      console.log(this.state.empid);
      console.log(this.state.ticket_name);
      console.log(this.state.summary);
      console.log(this.state.category);
      let emp_id=this.state.empid;
      let ticket_name1=this.state.ticket_name;
      let ticket_summary=this.state.summary;
      let ticket_category=this.state.category;
      
    fetch('https://stark-plains-72913.herokuapp.com/listTickets')
      .then(function (response) {   
            return response.json();
        }).then(result => {
        
        //Finding the max id returned from the api
        let max;
        for (let i=0 ; i<result.tickets.length ; i++) {
        if (!max || parseInt(result.tickets[i].id) > parseInt(max))
            max = result.tickets[i].id;
        }
        console.log(max);
        max=max+1;

        var ticket_obj= `{"name":\"${ticket_name1}\","Category":\"${ticket_category}\","Employee-Id":\"${emp_id}\","Summary":\"${ticket_summary}\","id":${max}}`;
        var ticket_obj_parsed=JSON.parse(ticket_obj);
        result.tickets.push(ticket_obj_parsed);
        console.log(result);
        
        fetch('https://stark-plains-72913.herokuapp.com/addTickets', {
            method: 'post',
            body: JSON.stringify(result),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function(response) {
            console.log(response);
            window.location="/";
        });
  });

  }
    render(){
        return(
            <div>
            <NewNavbar/>
            <div className="form-class">
            <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="empid" bsSize="large">
            <ControlLabel>Employee Id</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.empid}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="ticket_name" bsSize="large">
            <ControlLabel>Ticket Title</ControlLabel>
            <FormControl
              value={this.state.ticket_name}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
        <FormGroup controlId="summary" bsSize="large">
            <ControlLabel>Ticket Description</ControlLabel>
            <FormControl
              value={this.state.summary}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
                 <FormGroup controlId="category" bsSize="large">
            <ControlLabel>Ticket Category</ControlLabel>
                   <select
                    className='form-control'
                    id="category"
                    onChange={this.handleChange}>
                    value={this.state.category} 
                    onChange={this.handleChange}>
                    <option key="Serverx" value="" disabled="disabled">Choose Category</option>
                    <option key="Servers/Laptop" value="Servers/Laptop">
                    Servers/Laptop
                    </option>
                    <option key="Software" value="Software">
                    Software
                    </option>
                    <option key="Hardware" value="Hardware">
                    Hardware
                    </option>
                    </select> 
          </FormGroup>
                  
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
        </div>
        </div>
        );
    }
}
export default RaiseTicket;