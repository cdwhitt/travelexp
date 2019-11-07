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

  def create
    post = Post.new(
      title: params[:title],
      body: params[:body],
      photos: params[:photos],
      location: params[:location]
    )
    post.user = current_user
    post.geocode
    if post.save
      render json: post
    else
      render json: {
        errors: post.errors.messages,
        fields: post
      }
    end
  end

  def search
    users = User.all
    posts = []
    posts = Post.where("location ILIKE ?", "%#{params['search_string']}%").or(Post.where("title ILIKE ?", "%#{params['search_string']}%"))
    render json: {
      users: users,
      posts: posts
    }
  end

end
