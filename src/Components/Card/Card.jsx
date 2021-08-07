/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './Card.css';

const Card = ({ data }) => {
  return (
    <>
      <li className="card">
        <img className="card__image" src={data.urlToImage} alt={data.title} />
        <div className="card__content">
          <h3 className="card__name">{data.title}</h3>
          <p className="card__author">{data.author}</p>
          <p>{data.description}</p>
        </div>
      </li>
    </>
  );
};

export default Card;
