import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import Favorites from './components/Favorites';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="hero-section">
          <h1>Buscador de Personajes - Rick and Morty</h1>
          <div className="navigation-bar">
            <Link to="/">Inicio</Link>
            <Link to="/favorites">Ver Favoritos</Link>
          </div>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
