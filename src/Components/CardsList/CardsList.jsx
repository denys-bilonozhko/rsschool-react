import React from 'react';
import Card from '../Card/Card';
import './CardsList.css';

const CardsList = () => {
  return (
    <>
      <ul className="cards-list">
        <Card />
      </ul>
    </>
  );
};

export default CardsList;
