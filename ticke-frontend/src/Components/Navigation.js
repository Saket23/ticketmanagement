import React from 'react';
import { Route,Switch } from 'react-router-dom';
import TableView from './TableView';
import RaiseTicket from './RaiseTicket';


const Navigation = () =>(
<Switch>
<Route path="/" exact component ={TableView} />
<Route path="/raise-ticket" exact component ={RaiseTicket} />
</Switch>
);
export default Navigation;
