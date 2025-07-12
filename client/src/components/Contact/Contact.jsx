import React from 'react';
import "./Contact.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Optional icons

const Contact = () => {
  return (
    <div className='contact-container' id="contact">
        <h1>Do visit us soon!</h1>
        <div className="address-info">
           <section>
               <FaMapMarkerAlt className="icon" size={30} color="#ff914d" />
               <h3>AL HUDHUD CAFE</h3>
               <p>Near Al Madina Hyp. Market, Al Yarmook, Sharjah-U.A.E</p>
           </section>
           <section>
               <FaEnvelope className="icon" size={30} color="#ff914d" />
               <h3>Email Address</h3>
               <p>None</p>
           </section>
           <section>
               <FaPhoneAlt className="icon" size={30} color="#ff914d" />
               <h3>Phone Number</h3>
               <p>Mob:- 0565353448</p>
               <p>Landline:- 065661784</p>
               <p>Open: 5AM - 12PM Daily</p>
           </section>
        </div>
    </div>
  )
}

export default Contact;