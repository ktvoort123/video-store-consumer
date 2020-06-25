import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import Container from 'react-bootstrap/Container'

import Main from './components/Main';
import Header from './components/Header';
import Selections from './components/Selections';

import {
  useLocation
} from "react-router-dom";


const App = (props) => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  
  const [errorMessage, setErrorMessage] = useState(null);

  console.log("Customer in state: " + JSON.stringify(selectedCustomer))
  console.log("Movie in state: " + selectedMovie)
  console.log("# of movies in state: " + movies.length)

  const url = "http://localhost:3000";

  useEffect (() => {
    fetchMovies();
    fetchCustomers();
  }, []);

  const fetchMovies = () => {
    console.log("fetching movies from db with axios");
    axios.get(url + "/movies")
    .then( (response) => {
      setMovies(response.data);
    })
    .catch((error) => {
      console.log(`ERROR: ${error}`)
    });
  }

  const fetchCustomers = () => {
    console.log("fetching customers from db with axios");
    axios.get(url + "/customers")
    .then( (response) => {
      setCustomers(response.data);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  }

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

  const addToLibrary = (event) => {
    axios.post(url + "/movies", event)
    .then( (response) => {
      console.log(response);
      fetchMovies();
    })
    .catch((error) => {
      console.log(error.message);
    });
  }

  const findPageName = () => {
    let name = ""
    switch(location.pathname) {
      case "/":
        name = "home"
        console.log("classname: home")
        break;
      default:
        name = location.pathname.substr(1)
        console.log(name)
    }
    return name;
  };

  const clearSelections = () => {
    setSelectedMovie(null)
    setSelectedCustomer(null)
  };

  
  return (
    <div className={"App container-fluid h-100 d-flex flex-column page__" + findPageName()}>
        { location.pathname !== "/" &&
        <Header /> 
        }
        <Main
          movies = {movies}
          customers = {customers}
          makeSelectionCallback={makeSelection}
          addToLibraryCallback={addToLibrary}
        />

        { (selectedCustomer || selectedMovie) && 
        <Selections 
          selectedCustomer={selectedCustomer} 
          selectedMovie={selectedMovie}
          clearSelectionsCallback={clearSelections}>
        </Selections>
        }
    </div>
  );
};

export default App;
