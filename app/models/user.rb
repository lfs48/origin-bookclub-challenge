class User < ApplicationRecord

    validates :username, :password_digest, :session_token, presence: true
    validates :username, :session_token, uniqueness: true
    validates :password, allow_nil: true, length: {minimum: 8}

end