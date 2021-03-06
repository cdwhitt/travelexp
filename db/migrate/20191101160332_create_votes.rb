class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.integer :up, default: 0
      t.integer :down, default: 0
      t.belongs_to :post, null: false
      t.belongs_to :user, null: false
      t.timestamps 
    end
  end
end
