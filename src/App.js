import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Main from './components/Main';
import Navbar from './components/Navbar';
import Selections from './components/Selections';


const App = () => {
  const [selectedCustomer, setSelectedCustomer] = useState([]);
  console.log("Customer in state: " + selectedCustomer)
  const [selectedMovie, setSelectedMovie] = useState([]);
  console.log("Movie in state: " + selectedMovie)

  const makeSelection = (type, value, e) => {
    if (type === "movie") {
      setSelectedMovie(value)
      console.log("selected a movie: " + value)
    } else {
      setSelectedCustomer(value)
      console.log("selected a customer: " + value)
    };
  };


  return (
    <div className="App">
      <Navbar />
      <Main 
        makeSelectionCallback={makeSelection}
        setSelectedCustomerCallback={setSelectedCustomer}
        setSelectedMovieCallback={setSelectedMovie}
      />
      <Selections 
        selectedCustomer={selectedCustomer}
        selectedMovie={selectedMovie}
      />
    </div>
  );
};

export default App;
