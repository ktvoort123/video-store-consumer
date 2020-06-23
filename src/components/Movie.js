import React ,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Movie = (props) => {
  
  return (
    <div className="movie" id={props.id} >
      <h4>{props.title}</h4>
      <p>{props.overview}</p>
      {/* <button onClick={props.onSelect} id={props.id} type="movie">
        Select Movie
      </button> */}

      <button onClick={(e) => props.makeSelectionCallback("movie", props.title, e)}>Select Movie</button>
    </div>
  )
}

Movie.propTypes = {
  title:PropTypes.string,
  overview:PropTypes.string
};

export default Movie;
