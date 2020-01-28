class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false
      t.integer :book_id, null: false

      t.index [:user_id, :book_id], unique: true

      t.timestamps
    end
  end
end
