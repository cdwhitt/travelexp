class AddAlbumToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :photos, :string
  end
end
