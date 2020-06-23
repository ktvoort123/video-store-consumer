import React ,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';


const Search = (props) => {
  const [movieSearchTerm, setMovieSearchTerm] = useState([]);
  const [movieResults, setMovieResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const url = "http://localhost:3000";

  const onSearchTermChange = (event) => {
    setMovieSearchTerm(event.target.value);

  };
    console.log(movieSearchTerm)

    useEffect(() => {
      fetchMovies();
    }, [movieSearchTerm]);

    const fetchMovies = () => {
      axios.get(url + "/movies?query=" + movieSearchTerm)
      .then( (response) => {
        setMovieResults(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    }

    const listMovies = () => {
      const processed = movieResults.map(movie => {
        return(
          <Movie key={movie.id} title={movie.title} overview={movie.overview} />
        );
      })
      return processed;
    }

  return (
    <div>
      <h1>Movie Search</h1> 
      <input value={movieSearchTerm} onChange={onSearchTermChange} />
      <h3>Results:</h3>
      <ul>
        {listMovies()}
      </ul> 
    </div>
  )
};


export default Search;
