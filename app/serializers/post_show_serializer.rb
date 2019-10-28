class PostShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :user_id, :current_user, :logged_in

  def current_user
    scope[:current_user]
  end

  def logged_in
    scope[:logged_in]
  end
end
