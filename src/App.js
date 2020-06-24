import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

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

  const url = "http://localhost:3000";

  // useEffect(() => {
  //   addToLibrary();
  // }, []);

  const addToLibrary = (event) => {
    console.log("------------------------------------------")
    console.log(event)
    console.log("------------------------------------------")

    axios.post(url + "/movies", event)
    .then( (response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.message);
    });
  }

  return (
    <div className="App container-fluid h-100 d-flex flex-column">

        <Header /> 
        <Main
          makeSelectionCallback={makeSelection}
          addToLibraryCallback={addToLibrary}
        />

        { (selectedCustomer || selectedMovie) && 
        <Selections 
          selectedCustomer={selectedCustomer} 
          selectedMovie={selectedMovie}> 
        </Selections>
        }
    </div>
  );
};

export default App;
