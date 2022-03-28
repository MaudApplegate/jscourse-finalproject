import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Private from './PrivateRoute';

import { SignIn } from './components/Auth/SignIn/SignIn';
import { SignUp } from './components/Auth/SignUp/SignUp';

import { Home } from './pages/Home';
import BlockPage from './pages/Block';
import ButtonPage from './pages/Button/ButtonPage';
import InputPage from './pages/Input';

function App() {
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
