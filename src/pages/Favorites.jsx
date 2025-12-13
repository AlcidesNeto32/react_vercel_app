import React, { useState, useEffect } from 'react';
import { getFavorites, removeFavorite } from '../utils/storage'; 

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  
  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemove = (bookNumber, title) => {
    const confirmRemove = window.confirm(`Tem certeza que deseja remover "${title}" dos seus favoritos?`);

    if (confirmRemove) {
        const updatedList = removeFavorite(bookNumber);
        
        setFavorites(updatedList);
    }
  };

  
  return (
    <div style={containerStyle}>
      <h2>Meus Livros Favoritos</h2>
      
      {favorites.length === 0 ? (
        <p style={{textAlign: 'center', marginTop: '20px'}}>
            Você ainda não adicionou nenhum livro favorito.
        </p>
      ) : (
        <ul className="favorites-list">
          {favorites.map((book) => (
            <li key={book.number} className="favorites-list-item">
              
              <div style={bookContentStyle}>
                <img 
                  src={book.cover} 
                  alt={`Capa do Livro ${book.number}`} 
                  style={coverStyle}
                />
                <div style={infoStyle}>
                    <p style={titleStyle}>{book.originalTitle}</p>
                    <p><strong>Número:</strong> {book.number}</p>
                    <p><strong>Páginas:</strong> {book.pages}</p>
                </div>
              </div>

              <button 
                onClick={() => handleRemove(book.number, book.originalTitle)} 
                style={removeButtonStyle}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}



const containerStyle = { 
    maxWidth: '1000px', 
    margin: '0 auto', 
    padding: '20px' 
};

const bookContentStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '15px',
    gap: '15px' 
};

const infoStyle = { textAlign: 'left' };
const coverStyle = { 
    maxWidth: '100px', 
    height: 'auto',
    flexShrink: 0 
};
const titleStyle = { fontWeight: 'bold', fontSize: '1.1em', marginBottom: '5px' };

const removeButtonStyle = {
    padding: '8px 15px',
    backgroundColor: '#dc3545', 
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%' 
};

export default Favorites;