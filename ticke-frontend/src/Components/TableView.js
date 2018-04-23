import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

import NewNavbar from './NewNavbar';

class TableView extends Component {
 constructor(props){
     super(props);
     
      this.state = {tickets:[]};
 }
    

    componentDidMount(){
        let constt='';
        console.log(this);
      fetch('https://stark-plains-72913.herokuapp.com/listTickets')
      .then(function (response) {   
            return response.json();
        }).then(result => {

          constt = result.tickets;
          console.log(constt);
            this.setState({tickets:constt});
          
      }).catch (function (error) {
        console.log('Request failed', error);
});
    }

// It's a data format example.
priceFormatter(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

render(){
    return(
        <div>
        <NewNavbar />
        <div className = "button-display">
            <Button className="button-class" bsStyle="primary" bsSize="large" onClick ={()=>window.location="/raise-ticket"}>
               Submit A Ticket
            </Button>
        </div>
        <div>
  <BootstrapTable data={this.state.tickets} striped={true} hover={true}>
      <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Id</TableHeaderColumn>
      <TableHeaderColumn dataField="name" dataSort={true} filter={ { type: 'TextFilter' } }>Ticket Name</TableHeaderColumn>
      <TableHeaderColumn dataField="Summary">Summary</TableHeaderColumn>
        <TableHeaderColumn dataField="Category" filter={ { type: 'TextFilter' } }>Category</TableHeaderColumn>
    <TableHeaderColumn dataField="Employee-Id">Employee Id</TableHeaderColumn>
  </BootstrapTable>
        </div>
        </div>
    );
}
}

export default TableView;