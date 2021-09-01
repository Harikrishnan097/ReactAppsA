import React from 'react';
import './contact.css';
const Contact = (props) => {
   
    return ( 

        <div className='divBox'>
            <h4>{props.name}</h4>
            <hr></hr>
            <h6>Phone:{props.phone}</h6>
            <h6 >Email:{props.email}</h6>

        </div>
     );
}
 
export default Contact;