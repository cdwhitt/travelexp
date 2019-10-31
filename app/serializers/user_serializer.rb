class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :posts, :comments, :score
end
