# Builds a json object using the book partial view.
# @book comes from the books controller
json.partial! "api/books/book", book: @book