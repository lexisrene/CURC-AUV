import React from 'react';
import '../styling/Join.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MailchimpForm from '../components/MailChimpForm';

function Join() {
  return (
    <div className='join-page'>
      <Header/>
      <div className='join-content'>
        <div className='join-roare-container'>
          <img src="assets/images/roare-flag.png" alt="roare-holding-flag" className='roare-flag'/>
        </div>
        <MailchimpForm/>
      </div>
      <Footer/>
    </div>
  );
}

export default Join;
