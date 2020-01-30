class Api::BooksController < ApplicationController

    # Retrieves all books from db, then renders api/books/index view
    def index
        @books = Book.all
        render "api/books/index"
    end

    # Retrieves a book by id from db, then renders api/books/show view
    def show
        @book = Book.find(book_params.id)
        render "api/books/show"
    end

    # Creates a new book object from params.
    # If book persists to db, render the api/books/show view.
    # Otherwise render errors.
    def create
        @book = Book.new(book_params)
        if @book.save
            render "api/books/show"
        else
            render json: @book.errors.full_messages, status: 422
        end
    end

    private

    # Filters params so that only params with a key of book is allowed, and only reads the id, title, author, and genre keys
    def book_params
        params.require(:book).permit(:id, :title, :author, :genre, :uploader_id)
    end

end