class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :posts, :comments, :score, :current_user
end
