import React, { useEffect, useState } from 'react';

const Form = ({ setFormValues }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('Male');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});

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
  };

  useEffect(() => {
    validate();
  }, [agree, firstName, birthDate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      setFormValues((state) => [
        ...state,
        { firstName, lastName, birthDate, gender, agree },
      ]);
    }
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">
        <p>Name: {errors?.firstName === '' && <span>No name</span>}</p>
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
      <label htmlFor="gender">
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
      <label htmlFor="agree">
        <p>Agree {errors?.agree !== undefined && <span>Not checked</span>}</p>
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
