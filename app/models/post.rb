class Post < ApplicationRecord
  mount_uploaders :photos, PostPhotoAlbumUploader

  validates :title, presence: true
  validates :body, presence: true

  belongs_to :user
  has_many :comments
  has_many :votes
end
