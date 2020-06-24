import React ,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import './Selections.css';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Selection = (props) => {
  
  return (
      <Row className="selections fixed-bottom">
        <Col>
          <p>Selected Customer: {props.selectedCustomer ? props.selectedCustomer : 'No Customer Selected'}</p>
        </Col>
        <Col>
          <p>Selected Movie: {props.selectedMovie ? props.selectedMovie : 'No Movie Selected'}</p>
        </Col>
        <Col>
          <button>Checkout Rental</button>
        </Col>
      </Row> 
  )
}


export default Selection;
