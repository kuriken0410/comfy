class Post < ApplicationRecord
  validates :text, presence: true
  belongs_to :user
  has_many :comments

  mount_uploader :image, ImageUploader

  def self.search(search)
    if search != ""
      Post.where('text LIKE(?)', "%#{search}%")
    else
      Post.all
    end
    # return Post.all unless search
    # search = "%#{search}%"
    # Post.find_by_sql(["select * from posts where text like ? ", search])
  end

end
