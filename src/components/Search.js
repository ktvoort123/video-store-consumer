import React ,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import './Search.css';

const Search = (props) => {
  const [movieSearchTerm, setMovieSearchTerm] = useState("");
  const [movieResults, setMovieResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const url = "http://localhost:3000";

  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  useEffect(() => {
    if (movieSearchTerm !== "") {
      fetchMovies();
    }
  }, [movieSearchTerm]);

  const onSearchTermChange = (event) => {
    setMovieSearchTerm(event.target.value);
    source.cancel();
    console.log(movieSearchTerm)
  };
  
  const fetchMovies = () => {
    axios.get(url + "/movies?query=" + movieSearchTerm, {
        cancelToken: source.token
    }).then((response)=>{
      setMovieResults(response.data);
    }).catch((error) => {
      if (axios.isCancel(error)) {
      console.log('get Request canceled');
      } else {
        setErrorMessage(error.message);
      }
    });
  };


    const listMovies = () => {
      const processed = movieResults.map(movie => {
        return(
          <Movie type="db" key={movie.external_id} title={movie.title} overview={movie.overview} release_date={movie.release_date} image_url={movie.image_url} external_id={movie.external_id} addToLibraryCallback={props.addToLibraryCallback}/>
        );
      })
      return processed;
    }

  return (
    <div>
      <h2>Search Page</h2>
      <Form>
        <Form.Group>
          <Form.Control size="lg" type="text" placeholder="Search for a movie" value={movieSearchTerm} onChange={onSearchTermChange} />
        </Form.Group>
      </Form>
      <h3>Results:</h3>
        <ul>
          {listMovies()}
        </ul> 
    </div>
  )
};


export default Search;
