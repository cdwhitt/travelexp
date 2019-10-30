class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :created_at, :user_id

  belongs_to :user
  has_many :comments
end
