import React ,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Movie = (props) => {  

  const [formFields, setFormFields] = useState({
    title: props.title,
    overview: props.overview,
    release_date: props.release_date,
    inventory: "",
    image_url: props.image_url,
    external_id: props.external_id
  });

  // event handlers
  const onInputChange = (event) => {
    console.log(`Changing field ${event.target.name} to ${event.target.value}`);
    // Duplicate formFields into new object
    const newFormFields = {
      ...formFields
    };
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    props.addToLibraryCallback(formFields);
  };

  return (
    <Row className="movie container" id={props.id} >
      <Col className="col-md-4">
      <img src={props.image_url} alt="movie-img" />
      </Col>
      <Col className="col-md-4">
      <h4>{props.title}</h4>
      <p>{props.overview}</p>
      </Col>
      <Col className="col-md-4">
        {props.type == "db" ?
          <form className="new-student-form" onSubmit={onFormSubmit}>
            <div>
              <label htmlFor="inventory">Inventory:</label>
              <input
                name="inventory"
                onChange={onInputChange}
                value={formFields.inventory}
              />
            </div>
            <input type="submit" value="Add to Library" />
          </form> :
          <p>Available Inventory: {props.available_inventory}</p>
        }
      { props.type != "db" && 
      <Button onClick={(e) => props.makeSelectionCallback("movie", props.title, e)}>Select {props.title}</Button> 
      }
      </Col>
  </Row>
  )
}

Movie.propTypes = {
  title:PropTypes.string,
  overview:PropTypes.string
};

export default Movie;