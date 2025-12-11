import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

const RANDOM_BOOK_ENDPOINT = 'https://potterapi-fedeperin.vercel.app/en/books/random';

function Home() {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchRandomBook = useCallback(async () => {
    setLoading(true);
    setError(null);
    setBook(null); 

    try {
      const response = await fetch(RANDOM_BOOK_ENDPOINT);
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
      const data = await response.json(); 
      setBook(data); 
    } catch (err) {
      console.error("Erro ao buscar livro:", err);
      setError("Falha ao carregar o livro. Verifique a API.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRandomBook();
  }, [fetchRandomBook]); 

  const handleCoverClick = () => {
    if (book) {
      navigate(`/details/${book.number}`, { state: { book } });
    }
  };

  
  if (loading) return <Spinner />;
  if (error) return <p style={errorStyle}>{error}</p>; 
  if (!book) return null;
  
  const titleText = `Livro #${book.number} ${book.originalTitle}`; 

  return (
    <div style={containerStyle}> {}
      <h2>Página Inicial</h2>
      <p>Clique na capa para ver os detalhes do livro.</p>
      
      {}
      <div style={bookContainerStyle}> 
        
        <img 
          src={book.cover} 
          alt={`Capa do Livro ${book.number}`} 
          onClick={handleCoverClick}
          style={coverStyle} 
          title="Clique para ver detalhes"
        />
        
        <p style={titleStyle}>{titleText}</p>
      </div>
      
      <button 
        onClick={fetchRandomBook}
        style={refreshButtonStyle}
        disabled={loading}
      >
        Buscar Outro Livro Aleatório
      </button>

    </div>
  );
}


const containerStyle = { 
  textAlign: 'center', 
  padding: '20px' 
};


const bookContainerStyle = { 
  display: 'inline-block', 
  cursor: 'pointer', 
  border: '1px solid #ccc', 
  padding: '15px', 
  borderRadius: '8px', 
  marginBottom: '20px',
};

const coverStyle = { 
  maxWidth: '250px', 
  height: 'auto', 
  marginBottom: '10px' 
}; 

const titleStyle = { fontWeight: 'bold' };

const refreshButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const errorStyle = {
    color: 'red',
    textAlign: 'center'
}

export default Home;