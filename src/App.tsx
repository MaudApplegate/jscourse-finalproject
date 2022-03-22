import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import BlockPage from './components/BlockPage';
import ButtonPage from './components/ButtonPage';
import InputPage from './components/InputPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to={'/buttons'}>Buttons</Link>
        <Link to={'/inputs'}>Inputs</Link>
        <Link to={'/blocks'}>Blocks</Link>
      </nav>
      <Routes>
        <Route path="/buttons" element={<ButtonPage />} />
        <Route path="/inputs" element={<InputPage />} />
        <Route path="/blocks" element={<BlockPage />} />
      </Routes>
    </Router>
  );
}

export default App;
