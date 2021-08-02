import React, { useState } from 'react';

import './App.css';
import Form from './Components/Form/Form';

const App = () => {
  const [formValues, setFormValues] = useState([]);
  return (
    <div>
      <Form setFormValues={setFormValues} />
    </div>
  );
};

export default App;
