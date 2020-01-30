# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

    after_initialize :ensure_session_token

    validates :username, :password_digest, :session_token, presence: true
    validates :username, :session_token, uniqueness: true
    validates :password, allow_nil: true, length: {minimum: 8}

    has_many :uploads,
        class_name: :Book,
        primary_key: :id,
        foreign_key: :uploader_id

    has_many :favorites

    has_many :favorite_books,
        through: :favorites,
        source: :book

    has_many :notes

    has_many :book_notes,
        through: :notes,
        source: :book

    attr_reader :password

    # Looks up user in db by username, then validates provided password
    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.is_password?(password)
            return user
        else
            return nil
        end
    end

    # Generates a random 16-char string, looping until the generated string isn't already an existing session token in db
    def self.generate_session_token
        token = SecureRandom.urlsafe_base64(16)
        user = User.find_by(session_token: token)
        while user
            token = SecureRandom.urlsafe_base64(16)
            user = User.find_by(session_token: token)
        end
        return token
    end

    # Generates a session token if the user doesn't already have one
    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    # Sets user's session token to a newly generated session token, then persists to db
    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        return self.session_token
    end

    # Sets the user's password digest to the provided password hashed and salted
    def password=(password)
        @password = password
        digest = BCrypt::Password.create(password)
        self.password_digest = digest
    end

    # Checks if provided password is the user's password
    def is_password?(password)
        digest = BCrypt::Password.new(self.password_digest)
        return digest.is_password?(password)
    end

end
