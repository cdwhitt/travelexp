class AddLatLong < ActiveRecord::Migration[5.2]
  def up
    add_column :posts, :latitude, :float
    add_column :posts, :longitude, :float
  end
  def down
    remove_column :posts, :latitude
    remove_column :posts, :longitude
  end
end
