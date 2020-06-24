import React ,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
  
  return (
    <div>
      <Nav>
        <Nav.Item>
          <Nav.Link>
            <Link to="/">
            Home
            </Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link>
            <Link to="/search">
            Search
            </Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link>
            <Link to="/library">
            Library
            </Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link>
            <Link to="/customers">
            Customers
            </Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default Navbar;
