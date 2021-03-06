import React ,{useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Home.css';
import { Link } from "react-router-dom";

const Home = (props) => {
  
  return (
    <Row className="home">
      <Col className="col-md-6">
      <ul className="big_links">
          <li>
            <Link to="/search">
              Add Movie to Library
            </Link>
          </li>
          <li>
            <Link to="/library">
              Select Movie
            </Link>
          </li>
          <li>
            <Link to="/customers">
              Select Customer
            </Link>
          </li>
        </ul>
        
      </Col>
      <Col className="col-md-6">
      </Col>
    </Row>
    
  );
}

export default Home;