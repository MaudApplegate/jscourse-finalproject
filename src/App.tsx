import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ACTION_SAVE_USER } from './ducks/auth/actions';
import Private from './components/PrivateRoute';
import { auth } from './services/firebase/firebase';

import { SignIn } from './components/Auth/SignIn/SignIn';
import { SignUp } from './components/Auth/SignUp/SignUp';

import Home from './pages/Home';
import BlockPage from './pages/Block';
import ButtonPage from './pages/Button/ButtonPage';
import InputPage from './pages/Input';
import styled, { createGlobalStyle } from 'styled-components';

import img from './assets/background-grad.png';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: Open-Sans, Helvetica, Sans-Serif;
  background: url(${img}) 
}
`;

export const StyledNav = styled.nav`
  text-align: center;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0px 15px;
  height: 30px;
  margin: 20px 20px;
  border: solid 3px #352371;
  border-radius: 2px;
  background-color: #ffffff;
  color: #352371;
  text-decoration: none;
  line-height: 30px;
  font-weight: 600;

  &: hover {
    background: #665d83;
    color: white;
  }
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        dispatch(ACTION_SAVE_USER(currentUser.refreshToken));
      } else {
        dispatch(ACTION_SAVE_USER(undefined));
      }
    });
  }, [auth, dispatch]);

  return (
    <>
      <GlobalStyle />
      <Router>
        <StyledNav>
          <StyledLink to={'/buttons'}>BUTTONS</StyledLink>
          <StyledLink to={'/inputs'}>INPUTS</StyledLink>
          <StyledLink to={'/blocks'}>BLOCKS</StyledLink>
        </StyledNav>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
          <Route
            path="/buttons"
            element={
              <Private>
                <ButtonPage />
              </Private>
            }
          />
          <Route
            path="/inputs"
            element={
              <Private>
                <InputPage />
              </Private>
            }
          />
          <Route
            path="/blocks"
            element={
              <Private>
                <BlockPage />
              </Private>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
