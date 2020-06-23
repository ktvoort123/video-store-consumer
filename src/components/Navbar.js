import React ,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (

    <div>
    <Link to="/">
      <button variant="outlined">
        Home
      </button>
    </Link>

    <Link to="/search">
      <button variant="outlined">
        Search
      </button>
    </Link>

    <Link to="/library">
      <button variant="outlined">
        Library
      </button>
    </Link>

    <Link to="/customers">
      <button variant="outlined">
        Customers
      </button>
    </Link>

    </div>

 
  )
}


export default Navbar;
