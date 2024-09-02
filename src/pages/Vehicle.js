import React from 'react';
import '../styling/Team.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UnderConstruction from '../components/UnderConstruction';

function Vehicle() {
  return (
    <div className='team-page'>
      <Header/>
      <UnderConstruction text='This page is under construction as we engineer our AUV! Come back later to learn more!'/>
      <Footer/>
    </div>
  );
}

export default Vehicle;
