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
          {/* Tela 1: Página Inicial */}
          <Route path="/" element={<Home />} /> 
          
          {/* Tela 2: Detalhes do Livro (usa o número do livro como parâmetro na URL) */}
          <Route path="/details/:number" element={<BookDetail />} /> 
          
          {/* Tela 3: Página de Favoritos */}
          <Route path="/favorites" element={<Favorites />} /> 
          
          {/* Fallback para 404 */}
          <Route path="*" element={<h1 style={{textAlign: 'center', marginTop: '50px'}}>404 - Página Não Encontrada</h1>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;