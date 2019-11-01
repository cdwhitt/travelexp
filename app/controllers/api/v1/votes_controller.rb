class Api::V1::VotesController < ApiController
  def index
    post = Post.find(params[:post_id])
    render json: post.votes
  end

  def create
    post = Post.find(params[:post_id])
    current_user_vote = Vote.where('user_id =? AND post_id=?', current_user, post).first

    if current_user_vote
      if current_user_vote.up == 1 && current_user_vote.down == 0
        if params[:_json] == "up"
          current_user_vote.up = 0
        elsif params[:_json] == "down"
          current_user_vote.up = 0
          current_user_vote.down = 1
        end
      elsif current_user_vote.up == 0 && current_user_vote.down == 1
        if params[:_json] == "down"
          current_user_vote.down = 0
        elsif params[:_json] == "up"
          current_user_vote.up = 1
          current_user_vote.down = 0
        end
      elsif current_user_vote.up == 0 && current_user_vote.down == 0
        if params[:_json] == "up"
          current_user_vote.up = 1
        elsif params[:_json] == "down"
          current_user_vote.down = 1
        end
      end
      current_user_vote.save
    else
      if params[:_json] == "up"
        vote = Vote.new(up: 1, down: 0, post: post, user: current_user)
      elsif params[:_json] == "down"
        vote = Vote.new(up: 0, down: 1, post: post, user: current_user)
      end
      vote.save
    end

    render json: post.votes
  end
end
