# == Schema Information
#
# Table name: notes
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  book_id    :integer          not null
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Note < ApplicationRecord

    validates :user_id, :book_id, :body, presence: true

    belongs_to :user, inverse_of: :notes

    belongs_to :book, inverse_of: :notes

end
