class Book < ApplicationRecord

    validates :title, :author, :genre, presence: true
    validates :title, uniqueness: {scope: :author}

    belongs_to :uploader,
        class_name: :User,
        primary_key: :id,
        foreign_key: :author_id

end