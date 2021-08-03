/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './Card.css';

const Card = ({ item }) => {
  return (
    <li className="card">
      <h3>{item.firstName}</h3>
      <h4>{item.lastName}</h4>
      <p>{item.birthDate}</p>
      <p>{item.gender}</p>
      <p>{item.switcher ? 'Subscribed' : 'Not subscribed'}</p>
    </li>
  );
};

export default Card;
