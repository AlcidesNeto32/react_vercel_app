const FAVORITES_KEY = 'favoritesBooks';

/**
 * @returns {Array}
 */
export const getFavorites = () => {
  const favoritesJSON = localStorage.getItem(FAVORITES_KEY);
  
  try {
    return favoritesJSON ? JSON.parse(favoritesJSON) : [];
  } catch (error) {
    console.error("Erro ao ler favoritos do localStorage:", error);
    return [];
  }
};

/**
 * @param {Object} book 
 * @returns {boolean}
 */
export const addFavorite = (book) => {
  const favorites = getFavorites();
  
  const isDuplicate = favorites.some(fav => fav.number === book.number);
  
  if (isDuplicate) {
    return false;
  }

  const newFavorites = [book, ...favorites];
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
  return true;
};