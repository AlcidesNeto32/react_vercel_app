import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>🏠 Página Inicial</Link>
        <Link to="/favorites" style={linkStyle}>⭐ Favoritos</Link>
      </nav>
    </header>
  );
}

const headerStyle = {
  backgroundColor: '#333',
  padding: '10px 0',
  marginBottom: '20px',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '30px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.1em',
};

export default Header;