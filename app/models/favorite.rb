class Favorite < ApplicationRecord

    validates :user_id, :book_id, presence: true
    validates :user_id, uniqueness: {scope: :book_id}

end