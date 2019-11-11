require "rails_helper"

RSpec.describe Api::V1::CommentsController, type: :controller do
  let!(:user1) { User.create(
    email: "john@gmail.com",
    password: "john123"
    ) }
  let!(:post1) { Post.create(
    title: "Top 10 places to travel in America",
    body: "Here they are! These are the best places to visit in America",
    user: user1
  ) }
  let!(:comment1) { Comment.create(
    body: "This is really a great post",
    user: user1,
    post_id: 1
  ) }

  describe "POST#create" do
    it "creates a new comment" do
      user = FactoryBot.create(:user)
      sign_in user
      post_json = {
        comment: {
          body: "this is a terrible post. I really disliked it a lot"
        },
        post_id: 1
      }

      prev_count = Comment.count
      post :create, params: post_json, format: :json
      expect(Comment.count).to eq(prev_count + 1)
    end
  end
end
