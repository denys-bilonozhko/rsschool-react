/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../Card/Card';
import './CardsList.css';

const CardsList = ({ articles }) => {
  return (
    <>
      <ul className="cards-list">
        {articles.map((article) => {
          return <Card key={article.publishedAt} article={article} />;
        })}
      </ul>
    </>
  );
};

export default CardsList;
