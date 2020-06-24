import React from 'react';
import { Switch, Route } from 'react-router-dom';

/**
 * Import all page components here
 */
import Home from '../components/Home';
import Search from '../components/Search';
import Library from '../components/Library';
import Customers from '../components/Customers';
import NotFound from '../components/NotFound';

const Main = (props) => {
  return (
    <Switch> 
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/home' component={Home}></Route>
  <Route exact path='/search' component={() => <Search addToLibraryCallback={props.addToLibraryCallback} />}></Route>
      <Route exact path='/library' component={() => <Library makeSelectionCallback={props.makeSelectionCallback} />}></Route>    
      <Route exact path='/customers' component={() => <Customers makeSelectionCallback={props.makeSelectionCallback} />}></Route>
      <Route><NotFound /></Route>
    </Switch>
  );
}

export default Main;