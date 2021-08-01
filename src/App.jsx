import React from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import CardsList from './Components/CardsList/CardsList';

import './App.css';

const App = () => {
  return (
    <>
      <div className="container">
        <div className="search">
          <SearchBar />
        </div>
      </div>
      <div className="container">
        <div className="cards-list">
          <CardsList />
        </div>
      </div>
    </>
  );
};

export default App;
