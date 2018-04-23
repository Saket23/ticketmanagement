import React,{Component} from 'react';
import {Navbar} from 'react-bootstrap';


class NewNavbar extends Component{
    
render(){
    return(
<Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">Ticket Management System</a>
    </Navbar.Brand>
  </Navbar.Header>
</Navbar>
);
}

}

export default NewNavbar;