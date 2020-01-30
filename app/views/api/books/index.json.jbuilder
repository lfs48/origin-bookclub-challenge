# Builds a json object from a collection of books. 
# Each key is the id of a book, and the value is a json object built using the book partial view.
# @books comes from the users controller
@books.each do |book|
    json.set! book.id do
        json.partial! "api/books/book", book: book
    end
end