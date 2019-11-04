class User < ApplicationRecord
  mount_uploader :profile_photo, ProfilePhotoUploader

  has_many :posts
  has_many :comments

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable


  def score
    (posts.count * 5) + (comments.count * 2)
  end

end
