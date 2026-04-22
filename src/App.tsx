import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import './index.css';

function App() {
  return (
    <BrowserRouter basename="/cat_adoption">
      <div className="app-container">
        <nav style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '40px', fontWeight: 'bold' }}>
          <Link to="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Главная</Link>
          <Link to="/about" style={{ color: 'var(--primary)', textDecoration: 'none' }}>О нас</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
