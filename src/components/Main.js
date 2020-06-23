import React from 'react';
import { Switch, Route } from 'react-router-dom';

/**
 * Import all page components here
 */
import Home from '../components/Home';
import Search from '../components/Search';
import Library from '../components/Library';
import Customers from '../components/Customers';

const Main = (props) => {
  return (
    <Switch> 
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/Search' component={Search}></Route>
      <Route exact path='/Library' component={() => <Library makeSelectionCallback={props.makeSelectionCallback} />}></Route>    
      <Route exact path='/Customers' component={() => <Customers makeSelectionCallback={props.makeSelectionCallback} />}></Route>

    </Switch>
  );
}

export default Main;