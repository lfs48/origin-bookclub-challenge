class Favorite < ApplicationRecord

    validates :user_id, :book_id, presence: true
    validates :user_id, uniqueness: {scope: :book_id}

    belongs_to :user, inverse_of: :favorites

    belongs_to :book, inverse_of: :favorites
end