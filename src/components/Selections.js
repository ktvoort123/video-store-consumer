import React ,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import './Selections.css';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Selection = (props) => {
  
  return (
    
      <Row className="selections h-25">
        <Col>
          <p>Selected Customer: {props.selectedCustomer ? props.selectedCustomer : 'No Customer Selected'}</p>
        </Col>
        <Col>
          <p>Selected Movie: {props.selectedMovie ? props.selectedMovie : 'No Movie Selected'}</p>
        </Col>
      </Row>

  )
}


export default Selection;
