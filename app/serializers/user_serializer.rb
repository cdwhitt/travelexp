class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :profile_photo, :posts, :comments, :score, :current_user
end
