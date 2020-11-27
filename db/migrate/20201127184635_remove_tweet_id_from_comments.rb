class RemoveTweetIdFromComments < ActiveRecord::Migration[6.0]
  def change
    remove_column :comments, :tweet_id, :integer
  end
end
