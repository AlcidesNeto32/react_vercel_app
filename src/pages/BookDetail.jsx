import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { addFavorite } from '../utils/storage';
import Spinner from '../components/Spinner';

const BOOK_BY_NUMBER_ENDPOINT = 'https://potterapi-fedeperin.vercel.app/en/books/';

function BookDetail() {
    const navigate = useNavigate();
    const location = useLocation();
    const { number } = useParams(); 

    const [book, setBook] = useState(location.state?.book || null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (book || !number) return;

        const fetchBookDetails = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`${BOOK_BY_NUMBER_ENDPOINT}${number}`);

                if (!response.ok) {
                    throw new Error(`Erro ${response.status}: Livro #${number} não encontrado.`);
                }

                const data = await response.json();
                setBook(data);
            } catch (err) {
                console.error("Erro na requisição de detalhes:", err);
                setError(err.message || "Não foi possível carregar os detalhes do livro.");
            } finally {
                setLoading(false);
            }
        };

        fetchBookDetails();
    }, [book, number]); 


    const handleAddToFavorites = () => {
        if (!book) return;
        const wasAdded = addFavorite(book);

        if (wasAdded) {
            alert("Livro adicionado aos favoritos!");
        } else {
            alert("Este livro já está na sua lista de favoritos!");
        }
    };

    const handleGoBack = () => {
        navigate('/');
    };

    if (loading) return <Spinner />;

    if (error || !book) {
        return (
            <div style={containerStyle}>
                <p style={{ color: 'red', textAlign: 'center', fontWeight: 'bold' }}>
                    {error || "Erro: Dados do livro indisponíveis ou navegação falhou."}
                </p>
                <button onClick={() => navigate('/', { replace: true })} style={{ ...buttonStyle, backgroundColor: '#3498db' }}>
                    Voltar à Home
                </button>
            </div>
        );
    }

    const titleText = `Livro #${book.number} ${book.originalTitle}`;

    return (
        <div style={containerStyle}>
            <h2>Página de Detalhes do Livro</h2>

            <p style={titleStyle}>{titleText}</p>

            <img
                src={book.cover}
                alt={`Capa do Livro ${book.number}`}
                style={coverStyle}
            />
            <div className="book-details-container">
                <h3>Detalhes Técnicos</h3>
                <p><strong>Data de publicação:</strong> {book.releaseDate}</p>
                <p><strong>Páginas:</strong> {book.pages}</p>
                <p><strong>Descrição:</strong> {book.description}</p>
            </div>

            <div style={buttonsContainerStyle}>
                <button onClick={handleGoBack} style={{ ...buttonStyle, backgroundColor: '#5cb85c' }}>
                    Botão 1 - Voltar à Página Inicial
                </button>

                <button onClick={handleAddToFavorites} style={{ ...buttonStyle, backgroundColor: '#f0ad4e' }}>
                    Botão 2 - Adicionar aos Favoritos
                </button>
            </div>
        </div>
    );
}

const containerStyle = { maxWidth: '650px', margin: '0 auto', padding: '20px', textAlign: 'center' };
const titleStyle = { fontWeight: 'bold', fontSize: '1.4em' };
const coverStyle = { maxWidth: '250px', height: 'auto', margin: '15px 0' };
const buttonsContainerStyle = { display: 'flex', justifyContent: 'space-around', marginTop: '30px' };
const buttonStyle = { padding: '10px 20px', border: 'none', borderRadius: '5px', color: 'white', cursor: 'pointer', fontSize: '1em' };

export default BookDetail;