/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import CardsList from './Components/CardsList/CardsList';
import './App.css';
import axios from './services/api';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState('relevancy');
  const [page, setPage] = useState(1);
  const [pageCounter, setPageCounter] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const pageHandler = (event) => {
    setPage(+event.target.value);
  };

  const pageSizeHandler = (event) => {
    setPageSize(+event.target.value);
  };
  const sortHandler = (event) => {
    setSortBy(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.get(
        `v2/everything?q=${searchValue}&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}&apiKey=a956ca2b7336428ab860e25e2c4cd101`
      );
      setArticles(response.data.articles);
      setTotalResults(response.data.totalResults);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
      setPageCounter(page);
    }
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <div className="container">
        <form className="search" onSubmit={handleSubmit}>
          <label className="search__label" htmlFor="search">
            Search
            <input
              className="search__input"
              id="search"
              type="text"
              value={searchValue}
              onChange={handleChange}
              disabled={isLoading}
            />
          </label>
          <label className="search__label" htmlFor="sort">
            Sort by:
            <select
              className="search__input"
              id="sort"
              name="sort"
              onChange={sortHandler}
              value={sortBy}
            >
              <option value="relevancy">Relevancy</option>
              <option value="popularity">Popularity</option>
              <option value="publishedAt">Date</option>
            </select>
          </label>
          <label className="search__label" htmlFor="pages">
            Result per page:
            <select
              className="search__input"
              id="pages"
              name="pages"
              onChange={pageSizeHandler}
              value={pageSize}
            >
              <option value="10">10</option>
              <option value="30">30</option>
              <option value="40">40</option>
            </select>
          </label>
          <label className="search__label" htmlFor="page">
            Page:
            <input
              className="search__input search__page"
              type="number"
              name="page"
              onChange={pageHandler}
              value={page}
            />
          </label>
          <button className="search__button" type="submit" disabled={isLoading}>
            Search
          </button>
        </form>

        {totalResults ? (
          <div className="container info">
            <p>
              Current page: {pageCounter}/{Math.ceil(totalResults / 10)}
            </p>
            <p>Total Results: {totalResults}</p>
          </div>
        ) : (
          ''
        )}
      </div>
      {isLoading ? (
        <p className="container">Loading...</p>
      ) : (
        <CardsList articles={articles} />
      )}
    </>
  );
};

export default App;
