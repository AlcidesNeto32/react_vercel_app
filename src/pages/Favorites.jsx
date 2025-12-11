import React, { useState, useEffect } from 'react';
import { getFavorites } from '../utils/storage';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = getFavorites(); 
    setFavorites(savedFavorites);
  }, []);

  return (
    <div style={containerStyle}>
      <h2>⭐ Página de Favoritos</h2>
      
      {favorites.length === 0 ? (
        <p>Você ainda não adicionou nenhum livro aos favoritos.</p>
      ) : (
        <ul style={listStyle}>
          {favorites.map((book, index) => (
            <li key={book.number || index} style={listItemStyle}>
              
              <p style={{fontWeight: 'bold', margin: '0 0 5px 0'}}>
                {book.originalTitle}
              </p>
              
              <div style={detailsStyle}>
                <img 
                    src={book.cover} 
                    alt={`Capa de ${book.originalTitle}`} 
                    style={imageStyle}
                />
                <div style={{ marginLeft: '10px' }}>
                    <small>Livro #{book.number}</small>
                    <br />
                    <small>Publicação: {book.releaseDate}</small>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const containerStyle = { maxWidth: '800px', margin: '0 auto', padding: '20px', textAlign: 'center' };
const listStyle = { listStyleType: 'none', padding: 0 };
const listItemStyle = { 
    border: '1px solid #eee', 
    padding: '15px', 
    margin: '10px 0', 
    borderRadius: '4px',
    textAlign: 'left'
};
const detailsStyle = { display: 'flex', alignItems: 'center', marginTop: '10px' };
const imageStyle = { width: '60px', height: 'auto' };

export default Favorites;