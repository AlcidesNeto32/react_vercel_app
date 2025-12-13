const STORAGE_KEY = 'hp_favorites';

export const addFavorite = (book) => {
    const favorites = getFavorites();
    
    const exists = favorites.some(fav => fav.number === book.number);
    
    if (exists) {
        return false; 
    }
    
    favorites.push(book);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    return true;
};

export const removeFavorite = (bookNumber) => {
    let favorites = getFavorites();
    
    const updatedFavorites = favorites.filter(fav => fav.number !== bookNumber);
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFavorites));
    
    return updatedFavorites; 
};

export const getFavorites = () => {
    const favoritesString = localStorage.getItem(STORAGE_KEY);
    return favoritesString ? JSON.parse(favoritesString) : [];
};
