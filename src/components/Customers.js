import React ,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer';


const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const url = "http://localhost:3000";

  useEffect(() => {
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
        <Customer key={customer.id} name={customer.name} overview={customer.overview}  />
      );
    })
    return processed;
  }


  return (
    <div>
      <h1>Movies Library</h1> 
      {listCustomers()}
    </div>
  )
};
};


export default Customers;



      // const customerDataFromAPI = response.data.map( (customer) => {
        //       return({name: customer.customer.name,
        //       address: customer.customer.address,
        //       city: customer.customer.city,
        //       state: customer.customer.state,
        //       postal_code: customer.customer.postal_code,
        //       phone: customer.customer.phone,
        //       account_credit: customer.customer.account_credit,
        //       movies_checked_out_count: customer.customer.movies_checked_out_count,
        //       id: customer.customer.id,
        //       })
        // })


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