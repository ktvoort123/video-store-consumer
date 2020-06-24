import React ,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from "react-router-dom";
import  { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = () => {
  
  return (
    <div>
      <Navbar>
        <Nav>
          <Nav.Item>
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/search" >Search</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/library" >Library</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/customers" >Customers</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Header;
