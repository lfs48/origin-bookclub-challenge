# == Schema Information
#
# Table name: favorites
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  book_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Favorite < ApplicationRecord

    validates :user_id, :book_id, presence: true
    validates :user_id, uniqueness: {scope: :book_id}

    belongs_to :user, inverse_of: :favorites

    belongs_to :book, inverse_of: :favorites
end
