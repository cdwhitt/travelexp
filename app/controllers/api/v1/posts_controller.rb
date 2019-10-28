class Api::V1::PostsController < ApiController
  def index
    render json: Post.all
  end

  def show
    render json: Post.find(params[:id])
  end

  def create
    post = Post.new(post_params)

    if post.save
      render json: post
    else
      render json: {
        errors: post.errors.messages,
        fields: post
      }
    end
  end

  private
  def post_params
    params.require(:post).permit(:title, :body)
  end
end
