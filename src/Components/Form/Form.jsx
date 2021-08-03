import React, { useEffect, useState } from 'react';
import Switcher from '../Switcher/Switcher';
import './Form.css';

const Form = ({ setFormValues }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('Male');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});
  const [switcher, setSwitcher] = useState(false);

  const validate = () => {
    setErrors({});
    if (!agree) {
      setErrors((state) => ({ ...state, agree }));
    }
    if (firstName === '') {
      setErrors((state) => ({ ...state, firstName }));
    }
    if (lastName === '') {
      setErrors((state) => ({ ...state, lastName }));
    }
    if (birthDate === '') {
      setErrors((state) => ({ ...state, birthDate }));
    }
  };

  const resetForm = () => {
    setAgree(false);
    setGender('Male');
    setBirthDate('');
    setLastName('');
    setFirstName('');
    setSwitcher(false);
  };

  useEffect(() => {
    validate();
  }, [agree, firstName, birthDate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      setFormValues((state) => [
        ...state,
        { firstName, lastName, birthDate, gender, agree, switcher },
      ]);
    }
    resetForm();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label" htmlFor="firstName">
        <p>Name: {errors?.firstName === '' && <span>No name</span>}</p>
        <input
          className="text-input"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>
      <label className="label" htmlFor="firstName">
        Surname:
        <input
          className="text-input"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </label>
      <label className="label" htmlFor="birthDate">
        Birth date:
        <input
          className="date-input"
          type="date"
          name="birthDate"
          value={birthDate}
          onChange={(event) => setBirthDate(event.target.value)}
        />
      </label>
      <label className="label" htmlFor="gender">
        Gender:
        <select
          name="gender"
          value={gender}
          onChange={(event) => {
            setGender(event.target.value);
          }}
        >
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </label>
      <div className="switcher">
        <span className="switcher-name">Subscribe:</span>
        <Switcher setSwitcher={setSwitcher} switcher={switcher} />
      </div>
      <label className="label agree-label" htmlFor="agree">
        <input
          className="checkbox"
          type="checkbox"
          name="agree"
          checked={agree}
          onChange={() => {
            setAgree((prev) => !prev);
          }}
        />
        <p>Agree {errors?.agree !== undefined && <span>Not checked</span>}</p>
      </label>
      <div>
        <input className="button" type="submit" value="Send" />
      </div>
    </form>
  );
};

export default Form;
