class Api::V1::CommentsController < ApiController

  def create
    comment = Comment.new(comment_params)
    post = Post.find(params[:post_id])
    comment.post = post
    comment.user = current_user

    if comment.save
      render json: comment
    else
      render json: {
        errors: comment.errors.messages,
        fields: comment
      }
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
