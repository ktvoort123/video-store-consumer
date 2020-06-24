import React ,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Search.css';


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
          <Movie key={movie.id} title={movie.title} overview={movie.overview} onButtonClick={props.addToLibraryCallback}/>
        );
      })
      return processed;
    }

  return (
    <Row className="home h-100">
      <Col>
        <Row>
        <h2>Search Page</h2>
        </Row>
        <Row>
          <input value={movieSearchTerm} onChange={onSearchTermChange} />
        </Row>
        <Row>
          <h3>Results:</h3>
            <ul>
              {listMovies()}
            </ul> 
        </Row>
      </Col>
    </Row>
  )
};


export default Search;
