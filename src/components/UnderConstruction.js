import React from 'react';
import './UnderConstruction.css';

function UnderConstruction({ text }) {
  return (
    <div className='under-construction-page'>
      <div className='roare-container'>
        <img src="assets/images/roare-wrench.png" alt="roare-holding-wrench" className='roare-wrench'/>
      </div>
      <div className='under-construction-text'>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
}

export default UnderConstruction;
