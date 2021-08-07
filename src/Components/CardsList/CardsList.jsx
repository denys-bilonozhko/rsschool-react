/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../Card/Card';
import './CardsList.css';

const CardsList = ({ data }) => {
  return (
    <>
      <ul className="cards-list">
        {data.map((article) => {
          return <Card key={article.publishedAt} data={article} />;
        })}
      </ul>
    </>
  );
};

export default CardsList;
