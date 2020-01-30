class RenameUploaderToUploaderIdInBooks < ActiveRecord::Migration[5.2]
  def change
    rename_column :books, :uploader, :uploader_id
  end
end
