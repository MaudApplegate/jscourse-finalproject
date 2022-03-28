import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../services/firebase/firebase';

import { StyledForm, StyledLink } from '../styled';

export const SignUp: React.FC = () => {
  const [values, setValues] = useState({ email: '', password: '' });

  const handleChange = (
    e: React.ChangeEvent & { target: { name: string; value: string } }
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await auth.createUserWithEmailAndPassword(values.email, values.password);
    navigate('/signin');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLink to="/signin">Sign In</StyledLink>
      <h2>Sign Up</h2>
      <label> Email: </label>
      <input name="email" onChange={handleChange} value={values.email} />
      <label> Password: </label>
      <input name="password" onChange={handleChange} value={values.password} />
      <button>Submit</button>
    </StyledForm>
  );
};
