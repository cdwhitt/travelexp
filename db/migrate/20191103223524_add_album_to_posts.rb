class AddAlbumToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :photo_album, :text, array: true, default: []
  end
end
