import React ,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer';


const Search = (props) => {
  const [movieSearchTerm, setMovieSearchTerm] = useState([]);
  const [movieResults, setMovieResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const url = "http://localhost:3000";

  const onButtonClick = () => props.setSelectedCustomerCallback(props.name);


  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    axios.get(url + "/movies?query=" + movieSearchTerm)
    .then( (response) => {
      setMovieResults(response.data);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  }

  const listMovieResults = () => {
    const processed = movieResults.map(movieResult => {
      return(
        <Movie key={movieResult.id} title={movieResult.title} description={movieResult.description} id={movieResult.id} />
      );
    })
    return processed;
  }


  return (
    <div>
      <h1>Movie Search</h1> 
      <form onSubmit={onButtonClick}>
        <label>
          Movie Title:
          <input type="text" value={movieSearchTerm}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h3>Results:</h3>
      <ul>
        {movieResults}
      </ul>
    </div>
  )
};


export default Search;
