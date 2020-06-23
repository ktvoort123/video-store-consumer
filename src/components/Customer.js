import React ,{useState, useEffect} from 'react';
import axios from 'axios';

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const url = "http://localhost:3000";

  useEffect(() => {
    //our API call
    axios.get(url + "/customers")
      .then((response) => {

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
        const customerDataFromAPI = response.data;

        setCustomers(customerDataFromAPI)
      })
      .catch((error) =>{
        setErrorMessage(error.message);
      })
  }, []);

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


  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">All Customers</span></h1>
        {customers}
      </header>
      
      
    </section>
  );

};


export default Customer;
