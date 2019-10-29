class PostShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :created_at, :user_id, :current_user, :logged_in

  has_many :comments

  def current_user
    scope[:current_user]
  end

  def logged_in
    scope[:logged_in]
  end
end
