import React ,{useState, useEffect, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Movie from './Movie';


const Library = (props) => {
  const [movies, setMovies] = useState([]);

  const url = "http://localhost:3000";

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

  useEffect (() => {
    fetchMovies();
  }, []);



  const listMovies = () => {
    const processed = movies.map(movie => {
      return(
        <Movie key={movie.id} title={movie.title} overview={movie.overview} inventory={movie.inventory} makeSelectionCallback={props.makeSelectionCallback} />
      );
    })
    return processed;
  }


  return (
    <div>
      <h1>Movies Library</h1> 
      {listMovies()}
    </div>
  )
};


export default Library;

