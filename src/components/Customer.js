import React ,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Customer = (props) => {

  return (
    <div className="customer" id={props.id} >
      <h4>{props.name}</h4>
      <p>{props.phone}</p>
      <button onClick={(e) => props.makeSelectionCallback("customer", props.name, e)}>Select Customer</button>
    </div>
  )
};

// Customer.propTypes = {
//   title:PropTypes.string,
//   overview:PropTypes.string
// };

export default Customer;
