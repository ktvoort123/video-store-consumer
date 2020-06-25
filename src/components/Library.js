import React ,{useState, useEffect, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Movie from './Movie';


const Library = (props) => {
  
  const listMovies = () => {
    const processed = props.movies.map(movie => {
      return(
        <Movie key={movie.id} title={movie.title} overview={movie.overview} available_inventory={movie.available_inventory} image_url={movie.image_url} makeSelectionCallback={props.makeSelectionCallback} />
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

