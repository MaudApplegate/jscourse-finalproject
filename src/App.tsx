import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ACTION_SAVE_USER } from './ducks/auth/actions';
import Private from './PrivateRoute';
import { auth } from './services/firebase/firebase';

import { SignIn } from './components/Auth/SignIn/SignIn';
import { SignUp } from './components/Auth/SignUp/SignUp';

import Home from './pages/Home';
import BlockPage from './pages/Block';
import ButtonPage from './pages/Button/ButtonPage';
import InputPage from './pages/Input';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        dispatch(ACTION_SAVE_USER(currentUser.refreshToken));
        window.onunload = async () => {
          await auth.signOut();
        };
      } else {
        dispatch(ACTION_SAVE_USER(undefined));
      }
    });
  }, [auth, dispatch]);

  return (
    <Router>
      <nav>
        <Link to={'/buttons'}>Buttons</Link>
        <Link to={'/inputs'}>Inputs</Link>
        <Link to={'/blocks'}>Blocks</Link>
      </nav>
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
  );
}

export default App;
