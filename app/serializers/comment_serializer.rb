class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :user_id, :comment_date

  def comment_date
    "#{object.created_at.strftime("%B %d, %Y - %I:%M%P")}"
  end

  belongs_to :user
end
