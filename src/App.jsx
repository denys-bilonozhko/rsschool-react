import React, { useEffect, useState } from 'react';
import Form from './Components/Form/Form';
import Card from './Components/Card/Card';
import './App.css';

const App = () => {
  const [formValues, setFormValues] = useState(
    JSON.parse(localStorage.getItem('myData')) || []
  );

  useEffect(() => {
    localStorage.setItem('myData', JSON.stringify(formValues));
    console.log(localStorage.getItem('myData'));
  }, [formValues]);
  return (
    <>
      <div>
        <Form setFormValues={setFormValues} formValues={formValues} />
      </div>
      <ul>
        {formValues.map((item) => {
          return <Card item={item} key={Math.floor(Math.random() * 100)} />;
        })}
      </ul>
    </>
  );
};

export default App;
