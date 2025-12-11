import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import Favorites from './pages/Favorites';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} /> 
          
          <Route path="/details/:number" element={<BookDetail />} /> 
          
          <Route path="/favorites" element={<Favorites />} /> 
          
          <Route path="*" element={<h1 style={{textAlign: 'center', marginTop: '50px'}}>404 - Página Não Encontrada</h1>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;