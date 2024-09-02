import React from 'react';
import '../styling/Team.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UnderConstruction from '../components/UnderConstruction';

function Team() {
  return (
    <div className='team-page'>
      <Header/>
      <UnderConstruction text='This page is under construction as we build our team! Come back later!'/>
      <Footer/>
    </div>
  );
}

export default Team;
