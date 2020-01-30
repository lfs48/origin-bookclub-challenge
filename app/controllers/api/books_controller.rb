class Api::BooksController < ApplicationController

    before_action :get_book, only: [:show, :update, :destroy]
    before_action :ensure_author, only: [:update, :destroy]

    # Retrieves all books from db, then renders api/books/index view
    def index
        @books = Book.all
        render "api/books/index"
    end

    # Retrieves a book by id from db, then renders api/books/show view
    def show
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

    def update
        if @book.update(book_params)
            render "api/books/show"
        else
            render @book.errors.full_messages, status: 422
        end
    end

    def destroy
        @book.destroy
    end

    private

    # Filters params so that only params with a key of book is allowed, and only reads the id, title, author, and genre keys
    def book_params
        params.require(:book).permit(:title, :author, :genre, :uploader_id)
    end

    def get_book
        @book = Book.find(params[:id])
    end

    def ensure_author
        render json: "You don't have permission to do that", status: 422 unless @book.uploader_id == current_user.id
    end

end