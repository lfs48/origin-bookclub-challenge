class Api::FavoritesController < ApplicationController

    def create
        @user = User.find_by(id: params[:favorite][:user_id])
        if @user.favorites.create(favorites_params)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
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
        params.require(:favorite).permit(:user_id, :book_id)
    end

end
