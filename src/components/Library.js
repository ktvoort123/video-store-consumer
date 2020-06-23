import React ,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Movie from './Movie';


const Library = () => {
  const [movies, setMovies] = useState([]);

  const url = "http://localhost:3000";

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    axios.get(url + "/movies")
    .then( (response) => {
      setMovies(response.data);
    })
    .catch((error) => {
      console.log(`ERROR: ${error}`)
    });
  }

  const listMovies = () => {
    const processed = movies.map(movie => {
      return(
        <Movie key={movie.id} title={movie.title} overview={movie.overview}  />
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

