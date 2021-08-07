import React from 'react';
import './Card.css';

const Card = ({ article }) => {
  return (
    <>
      <li className="card">
        <img
          className="card__image"
          src={article.urlToImage}
          alt={article.title}
        />
        <div className="card__content">
          <h3 className="card__name">{article.title}</h3>
          <p className="card__author">{article.author}</p>
          <p>{article.description}</p>
        </div>
      </li>
    </>
  );
};

export default Card;
