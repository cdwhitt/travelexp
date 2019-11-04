class Api::V1::PostsController < ApiController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    users = User.all
    posts = Post.all

    render json: {
      users: users,
      posts: posts
    }
  end

  def show
    post = Post.find(params[:id])
    render json: post, serializer: PostShowSerializer, scope: {current_user: current_user, logged_in: user_signed_in?}
  end

  # def create
  #   post = Post.new(post_params)
  #   post.user = current_user
  #
  #   if post.save
  #     render json: post
  #   else
  #     render json: {
  #       errors: post.errors.messages,
  #       fields: post
  #     }
  #   end
  # end
  def create
    binding.pry
    post = Post.new(
      title: params[:title],
      body: params[:body],
      photos: params["photos"]
    )
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

  # private
  # def post_params
  #   params.require(:post).permit(:title, :body)
  # end
end
