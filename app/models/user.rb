class User < ApplicationRecord

  has_many :posts
  has_many :comments

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable


  def score
    (posts.count * 5) + (comments.count * 2)
  end

end
