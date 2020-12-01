class AddIndexToPosts < ActiveRecord::Migration[6.0]
  def change
    add_index :posts, :text, length: 32
  end
end
