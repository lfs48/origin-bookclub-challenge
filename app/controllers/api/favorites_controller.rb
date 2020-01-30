class Api::FavoritesController < ApplicationController

    def create
        @book = Book.find_by(id: params[:favorite][:book_id])
        if @book.favorites.create(favorites_params)
            render "api/books/show"
        else
            render json: @book.errors.full_messages, status: 422
        end
    end

    def destroy
        favorite = Favorite.find_by(book_id: params[:favorite][:book_id], user_id: params[:favorite][:user_id])
        @post = favorite.post
        favoriteDup = favorite.dup
        favorite.destroy
        render json: favoriteDup
    end

    private

    def favorites_params
        params.require(:like).permit(:post_id, :user_id)
    end

end
