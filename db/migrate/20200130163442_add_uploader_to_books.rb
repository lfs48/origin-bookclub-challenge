class AddUploaderToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :uploader, :integer
  end
end
