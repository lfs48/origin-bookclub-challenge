# Builds a json object by extracting id and username from a user
# If the user is the currently logged in user, also extract list of favorite book id's
json.extract! user, :id, :username

if logged_in? && user.id == current_user.id
    json.favorites do
        json.array! user.favorite_books.map { |book| book.id }
    end
end