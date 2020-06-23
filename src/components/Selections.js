import React ,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const Selection = (props) => {
  
  return (
    <div>
      <ul>
        <li>
          Selected Customer: {props.selectedCustomer ? props.selectedCustomer : 'No Customer Selected'}
        </li>

        <li>
          Selected Movie: {props.selectedMovie ? props.selectedMovie : 'No Movie Selected'}
        </li>
      </ul>
    </div>

  )
}


export default Selection;
