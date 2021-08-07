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
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">
            Search
            <input
              id="search"
              type="text"
              value={searchValue}
              onChange={handleChange}
              disabled={isLoading}
            />
          </label>
          <label htmlFor="sort">
            Sort by:
            <select id="sort" name="sort" onChange={sortHandler} value={sortBy}>
              <option value="relevancy">Relevancy</option>
              <option value="popularity">Popularity</option>
              <option value="publishedAt">Date</option>
            </select>
          </label>
          <label htmlFor="pages">
            Result per page:
            <select
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
          <label htmlFor="page">
            Page:
            <input
              type="number"
              name="page"
              onChange={pageHandler}
              value={page}
            />
          </label>
          <button type="submit" disabled={isLoading}>
            Search
          </button>
        </form>

        {totalResults ? (
          <span>
            Current page: {pageCounter}/{Math.ceil(totalResults / 10)}
            <br /> Total Results: {totalResults}
          </span>
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
