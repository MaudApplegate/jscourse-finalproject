import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../../services/firebase/firebase';

import { StyledForm, StyledLink } from '../styled';

export const SignIn: React.FC = () => {
  const [values, setValues] = useState({ email: '', password: '' });

  const handleChange = (
    e: React.ChangeEvent & { target: { name: string; value: string } }
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await auth.signInWithEmailAndPassword(values.email, values.password);
    navigate('/buttons');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLink to="/signup">Sign Up</StyledLink>
      <h2>Sign In</h2>
      <label> Email: </label>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        value={values.email}
      />
      <label> Password: </label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={values.password}
      />
      <button>Submit</button>
    </StyledForm>
  );
};
