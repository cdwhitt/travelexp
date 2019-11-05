class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :created_at, :user_id

end
