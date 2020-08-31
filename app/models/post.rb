class Post < ApplicationRecord
  validates :text, presence: true
  belongs_to :user
  has_many :comments  
  # commentsテーブルとのアソシエーション

  mount_uploader :image, ImageUploader

  def self.search(search)
    return Post.all unless search
    Post.where('text LIKE(?)', "%#{search}%")
  end

  # ↓上記self.search(search)の記述をわかりやすく
  # def self.search(search)
    # if search
      # Tweet.where('text LIKE(?)', "%#{search}%")
    # else
      # Tweet.all
    # end
  # end
end
