import React ,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';

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
  const onInputChange = event => {
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
    <div className="movie" id={props.id} >
      <h4>{props.title}</h4>
      <p>{props.image_url}</p>
      <img title="my-img" src={props.image_url} alt="my-img" />
      <p>{props.overview}</p>
       {  props.type=="db" ?
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
            </form>   :
            <p>Inventory: {props.inventory}</p>
}

      { props.type != "db" && 
      <button onClick={(e) => props.makeSelectionCallback("movie", props.title, e)}>Select Movie</button> 
      }

  </div>
  )
}

Movie.propTypes = {
  title:PropTypes.string,
  overview:PropTypes.string
};

export default Movie;