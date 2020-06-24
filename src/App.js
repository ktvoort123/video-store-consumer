import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container'

import Main from './components/Main';
import Header from './components/Header';
import Selections from './components/Selections';


const App = () => {
  const [selectedCustomer, setSelectedCustomer] = useState([]);
  console.log("Customer in state: " + selectedCustomer)
  const [selectedMovie, setSelectedMovie] = useState([]);
  console.log("Movie in state: " + selectedMovie)

  const makeSelection = (type, value, e) => {
    e.preventDefault();
    if (type === "movie") {
      setSelectedMovie(value)
      console.log("selected a movie: " + value)
    } else {
      setSelectedCustomer(value)
      console.log("selected a customer: " + value)
    };
  };

  const addToLibrary = (e) => {
    //Axios POST request here??
  };

  return (
    <div className="App container-fluid h-100 d-flex flex-column">

        <Header />
        <Main
          makeSelectionCallback={makeSelection}
          addToLibraryCallback={addToLibrary}
          // setSelectedCustomerCallback={setSelectedCustomer}
          // setSelectedMovieCallback={setSelectedMovie}
        />
        <Selections 
          selectedCustomer={selectedCustomer}
          selectedMovie={selectedMovie}
        />
      
    </div>
  );
};

export default App;
