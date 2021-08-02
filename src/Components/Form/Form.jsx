import React, { useState } from 'react';

const Form = ({ setFormValues }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('Ukraine');
  const [agree, setAgree] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormValues((state) => [
      ...state,
      { firstName, lastName, birthDate, country, agree },
    ]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">
        Name:
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>
      <label htmlFor="firstName">
        Surname:
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </label>
      <label htmlFor="birthDate">
        Birth date:
        <input
          type="date"
          name="birthDate"
          value={birthDate}
          onChange={(event) => setBirthDate(event.target.value)}
        />
      </label>
      <label htmlFor="country">
        Country:
        <select
          name="country"
          value={country}
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        >
          <option>Russia</option>
          <option>Ukraine</option>
          <option>Europe</option>
        </select>
      </label>
      <label htmlFor="agree">
        Agree
        <input
          type="checkbox"
          name="agree"
          checked={agree}
          onChange={() => {
            setAgree((prev) => !prev);
          }}
        />
      </label>
      <div>
        <input type="submit" value="Send" />
      </div>
    </form>
  );
};

export default Form;
