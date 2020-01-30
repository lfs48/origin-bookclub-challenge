class Book < ApplicationRecord

    validates :title, :author, :genre, presence: true
    validates :title, uniqueness: {scope: :author}

    belongs_to :uploader,
        class_name: :User,
        primary_key: :id,
        foreign_key: :uploader_id

    has_many :favorites

    has_many :favorited_users,
        through: :favorites,
        source: :user

end