import React ,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import './Selections.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import axios from 'axios';
import { Link } from 'react-router-dom'

const Selection = (props) => {
  

  const createRental = () => {
    // console.log("------------------------------------------")
    // console.log(event)
    // console.log("------------------------------------------")

    axios.post(`http://localhost:3000/rentals/${props.selectedMovie}/check-out?customer_id=${props.selectedCustomer.customer_id}&due_date=2021-01-10`)
    .then( (response) => {
      console.log(response);
      props.clearSelectionsCallback();
    })
    .catch((error) => {
      console.log(error.message);
    });
  }


  return (
      <Row className="selections fixed-bottom">
        <Col className="col-md-5">
          <p>Selected Customer: {props.selectedCustomer ? props.selectedCustomer.name : <Link to="/customers" className="warning">Select Customer</Link>}</p>
        </Col>
        <Col className="col-md-5">
          <p>Selected Movie: {props.selectedMovie ? props.selectedMovie : <Link to="/library" className="warning">Select Movie</Link>}</p>
        </Col>
        <Col className="col-md-2">

        { (props.selectedCustomer && props.selectedMovie) &&
        <div className="triangle-container">
          <button onClick={createRental}>
            <span>Checkout</span>
            <svg height="60" width="45">
		        <polygon points="0,10 30,30 0,50" className="triangle" />
	        </svg></button>
        </div>
        }
          
        </Col>
      </Row> 
  )
}


export default Selection;