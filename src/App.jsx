import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Importação das Páginas/Telas
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import Favorites from './pages/Favorites';

function App() {
  return (
    <BrowserRouter>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Harry Potter Books App</h1>
        <nav>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/favorites" style={linkStyle}>Favoritos</Link>
        </nav>
      </header>
      
     
      <div className="app-main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/details/:number" element={<BookDetail />} />
          
          <Route path="/favorites" element={<Favorites />} />
          
          <Route path="*" element={<h2 style={{textAlign: 'center', marginTop: '50px'}}>Página Não Encontrada</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const headerStyle = {
  backgroundColor: '#1d1d1d',
  color: 'white',
  padding: '15px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginBottom: '20px',
};

const titleStyle = {
    fontSize: '1.5em',
    margin: '0',
};

const linkStyle = {
  color: '#89b4f8',
  textDecoration: 'none',
  marginLeft: '20px',
  fontSize: '1.1em',
};

export default App;