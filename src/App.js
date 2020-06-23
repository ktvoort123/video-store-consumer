import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Library from './components/Library';
import Search from './components/Search';
import Customer from './components/Customer';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="Video Store">
        <header className="App-header">
          <h1 className="App-title">Video Store API</h1>
        </header>

        <body>
          <nav>
          <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/library">Library</Link>
            </li>
            <li>
              <Link to="/customer">Customer</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/library">
            <Library />
          </Route>
          <Route path="/customer">
            <Customer />
          </Route>
        </Switch>
      </div>
    </Router>

          </nav>



        </body>

      </div>
    );
  }
}

function Home() {
  return <h2>Home</h2>
}


export default App;
