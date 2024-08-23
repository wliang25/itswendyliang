import React from 'react';

const Card = ({ title, descrip }) => {
  return (
    <div className='card'>
      <h1>{title}</h1>
      <div>{descrip}</div>
    </div>
  );
}

export default Card;