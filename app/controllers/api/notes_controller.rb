class Api::NotesController < ApplicationController

    before_action :get_note, only: [:show, :update, :destroy]
    before_action :ensure_author, only: [:update, :destroy]

    def index
        @notes = Note.all
        render "api/notes/index"
    end

    def create
        @note = Note.new(note_params)
        if @note.save
            render "api/notes/show"
        else
            render json: @note.errors.full_messages, status: 422
        end
    end

    def show
        render "api/notes/show"
    end

    def update
        if @note.update(note_params)
            render "api/notes/show"
        else
            render @note.errors.full_messages, status: 422
        end
    end

    def destroy
        @note.destroy
    end

    private

    def note_params
        params.require(:note).permit(:user_id, :book_id, :body)
    end

    def get_note
        @note = Note.find(params[:id])
    end

    def ensure_author
        render json: "You don't have permission to do that", status: 422 unless @note.user_id == current_user.id
    end

end