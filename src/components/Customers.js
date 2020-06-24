import React ,{useState, useEffect, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer';


const Customers = (props) => {
  const [customers, setCustomers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const url = "http://localhost:3000";

  useLayoutEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    axios.get(url + "/customers")
    .then( (response) => {
      setCustomers(response.data);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  }

  const listCustomers = () => {
    const processed = customers.map(customer => {
      return(
        <Customer key={customer.id} name={customer.name} phone={customer.phone} makeSelectionCallback={props.makeSelectionCallback} />
      );
    })
    return processed;
  }


  return (
    <div>
      <h1>List of Customers</h1> 
      {listCustomers()}
    </div>
  )
};


export default Customers;


          // const customers = customers.map( (customer) => {
  //   return (
  //     <li key={customer.id}>
  //       <p>{customer.name}</p>
  //       <p>{customer.address}</p>
  //       <p>{customer.city}</p>
  //       <p>{customer.state}</p>
  //       <p>{customer.postal_code}</p>
  //       <p>{customer.phone}</p>
  //       <p>{customer.account_credit}</p>
  //       <p>{customer.movies_checked_out_count}</p>
  //       <p>{customer.id}</p>
  //     </li> 
  //   )
  // });