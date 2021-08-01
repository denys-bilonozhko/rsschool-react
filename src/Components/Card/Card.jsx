import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <li className="card">
      <img
        className="card__image"
        src="https://via.placeholder.com/150"
        alt=""
      />
      <h3 className="card__name">Card Name</h3>
      <p className="card__author">Author Name</p>
      <button className="card__button" type="button">
        View
      </button>
    </li>
  );
};

export default Card;
