import React ,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import './Selections.css';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import axios from 'axios';

const Selection = (props) => {
  

  const createRental = () => {
    // console.log("------------------------------------------")
    // console.log(event)
    // console.log("------------------------------------------")

    axios.post(`http://localhost:3000/rentals/${props.selectedMovie}/check-out?customer_id=${props.selectedCustomer.customer_id}&due_date=2021-01-10`)
    .then( (response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.message);
    });
  }


  return (
      <Row className="selections fixed-bottom">
        <Col>
          <p>Selected Customer: {props.selectedCustomer ? props.selectedCustomer.name : 'No Customer Selected'}</p>
        </Col>
        <Col>
          <p>Selected Movie: {props.selectedMovie ? props.selectedMovie : 'No Movie Selected'}</p>
        </Col>
        <Col>
          <button onClick={createRental}>Checkout Rental</button>
        </Col>
      </Row> 
  )
}


export default Selection;