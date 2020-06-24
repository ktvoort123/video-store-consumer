import React ,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Movie = (props) => {  
  return (
    <div className="movie" id={props.id} >
      <h4>{props.title}</h4>
      <p>{props.overview}</p>

      { props.inventory ? 
      <p> Inventory: {props.inventory} </p> : 
      <p>Please set inventory.</p>
      }

      { props.inventory ? 
      <a href="#" onClick={ (e) => props.makeSelectionCallback("movie",props.title,e)}>Select Movie</a> :
      // <button onClick={ (e) => props.makeSelectionCallback("movie",props.title,e)}>Select Movie</button> :
      <button>Add To Library </button>
      }
    </div>
  )
}

Movie.propTypes = {
  title:PropTypes.string,
  overview:PropTypes.string
};

export default Movie;
