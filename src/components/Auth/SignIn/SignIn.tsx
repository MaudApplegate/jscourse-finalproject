import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../context/firebase';

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
    console.log('haha');
    navigate('/buttons');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        value={values.email}
      />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={values.password}
      />
      <button>Submit</button>
      <Link to="/signup">Sign Up</Link>
    </form>
  );
};
