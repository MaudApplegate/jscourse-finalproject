import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import BlockPage from './components/Blocks';
import ButtonPage from './components/Buttons';
import InputPage from './components/Inputs';

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
