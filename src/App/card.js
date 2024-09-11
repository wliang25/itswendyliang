import React from 'react';
import './card.css';

const Card = ({ title, descrip }) => {
  return (
    <div className='card'>
      <h1>{title}</h1>
      <div>{descrip}</div>
    </div>
  );
}

export default Card;