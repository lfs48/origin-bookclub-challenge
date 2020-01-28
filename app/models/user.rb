class User < ApplicationRecord

    after_initialize :ensure_session_token

    validates :username, :password_digest, :session_token, presence: true
    validates :username, :session_token, uniqueness: true
    validates :password, allow_nil: true, length: {minimum: 8}

    attr_reader :password

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.is_password?(password)
            return user
        else
            return nil
        end
    end

    def self.generate_session_token
        token = SecureRandom.urlsafe_base64(16)
        user = User.find_by(session_token: token)
        while user
            token = SecureRandom.urlsafe_base64(16)
            user = User.find_by(session_token: token)
        end
        return token
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        return self.session_token
    end

    def password=(password)
        @password = password
        digest = BCrypt::Password.create(password)
        self.password_digest = digest
    end

    def is_password?(password)
        digest = BCrypt::Password.new(self.password_digest)
        return digest.is_password?(password)
    end

end