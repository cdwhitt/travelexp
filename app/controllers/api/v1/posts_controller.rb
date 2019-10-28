class Api::V1::PostsController < ApiController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    render json: Post.all
  end

  def show
    post = Post.find(params[:id])
    render json: post, serializer: PostShowSerializer, scope: {current_user: current_user, logged_in: user_signed_in?}
  end

  def create
    post = Post.new(post_params)
    post.user = current_user

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
