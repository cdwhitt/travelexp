class Api::V1::UsersController < ApiController
  def index
    users = User.all.sort_by(&:score)
    users.reverse!
    render json: users
  end
end
