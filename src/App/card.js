import React from 'react';
import './card.css';

const Card = ({ title, descrip, tags = [] }) => {
  const tagsList = tags?.map((tag, index) => 
    <span key={index} className='tag'>{tag}</span>);
  return (
    <div className='card'>
      <h1>{title}</h1>
      <div>{descrip}</div>
      {tagsList && <div className='tags'>{tagsList}</div>}
    </div>
  );
}

export default Card;