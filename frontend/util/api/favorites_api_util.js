// Each of these methods sends an http request using jquery's ajax method to the rails api.

// GET request to create a new favorite.
export const favorite = (userId, bookId) => {
    return $.ajax({
        method: 'POST',
        url: `api/favorites`,
        data: {
            favorite: {
                user_id: userId, 
                book_id: bookId
            }
        }
    });
};

// GET request to remove a favorite.
export const unfavorite = (userId, bookId) => {
    return $.ajax({
        method: 'DELETE',
        url: 'api/favorites',
        data: {
            favorite: {
                user_id: userId, 
                book_id: bookId
            }
        }
    });
};