class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.integer :user_id, null: false
      t.integer :book_id, null: false
      t.string :body, null: false

      t.index :user_id
      t.index :book_id

      t.timestamps
    end
  end
end
