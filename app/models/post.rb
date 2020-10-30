class Post < ApplicationRecord
  validates :text, presence: true
  belongs_to :user
  has_many :comments  

  mount_uploader :image, ImageUploader

  def self.search(search)
    return Post.all unless search
    Post.where('text LIKE(?)', "%#{search}%")
  end

end
