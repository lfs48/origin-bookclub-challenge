class User < ApplicationRecord

    validates :title, :author, :genre, presence: true
    validates :title, uniqueness: {scope: :author}

end