import React ,{useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Home.css';
import { Link } from "react-router-dom";


const Home = (props) => {
  
  return (
    <Row className="home h-100">
      <Col className="col-md-6">
      <h2>Video Store</h2>
        <ul>
          <li>
            <Link to="/search">
              Search
            </Link>
          </li>
          <li>
            <Link to="/library">
              Library
            </Link>
          </li>
          <li>
            <Link to="/customers">
              Customers
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