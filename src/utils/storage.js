const FAVORITES_KEY = 'favoritesBooks';

/**
 * Lê a lista de favoritos do localStorage.
 * @returns {Array} Lista de livros favoritos ou um array vazio.
 */
export const getFavorites = () => {
  const favoritesJSON = localStorage.getItem(FAVORITES_KEY);
  
  // Trata null e converte de volta para objeto/array (JSON.parse) [cite: 145, 146]
  try {
    return favoritesJSON ? JSON.parse(favoritesJSON) : [];
  } catch (error) {
    console.error("Erro ao ler favoritos do localStorage:", error);
    return [];
  }
};

/**
 * Adiciona um livro à lista de favoritos.
 * @param {Object} book - O objeto do livro.
 * @returns {boolean} True se adicionado, false se já existia.
 */
export const addFavorite = (book) => {
  const favorites = getFavorites();
  
  // Evita duplicidade usando o 'number' do livro como chave única [cite: 54]
  const isDuplicate = favorites.some(fav => fav.number === book.number);
  
  if (isDuplicate) {
    return false;
  }

  // Salva a lista atualizada (JSON.stringify) [cite: 144]
  const newFavorites = [book, ...favorites];
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
  return true;
};