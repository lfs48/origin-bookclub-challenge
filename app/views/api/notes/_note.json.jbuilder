# Builds a json object by extracting id, user id, book id and body from note.
json.extract! note, :id, :user_id, :book_id, :body