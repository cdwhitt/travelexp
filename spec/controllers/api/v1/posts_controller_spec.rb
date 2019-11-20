require "rails_helper"

RSpec.describe Api::V1::PostsController, type: :controller do
  let!(:user1) { User.create(
    email: "john@gmail.com",
    password: "john123"
  ) }

  let!(:post1) { Post.create(
    title: "Mushrooms are from Space!",
    location: "Toronto",
    body: "They truly are! It's science!",
    user: user1
  ) }

  let!(:post2) { Post.create(
    title: "I Love Me A Good Sandwhich",
    location: "Pittsburgh",
    body: "They taste so delish.",
    user: user1
  ) }

  describe "GET#index" do
    it "should return a list of all blog posts" do
      user = FactoryBot.create(:user)
      sign_in user
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["posts"].length).to eq 2
      expect(returned_json["posts"][0].length).to eq 10
      expect(returned_json["posts"][1].length).to eq 10

      expect(returned_json["posts"][1]["title"]).to eq "Mushrooms are from Space!"
      expect(returned_json["posts"][1]["location"]).to eq "Toronto"
      expect(returned_json["posts"][1]["body"]).to eq "They truly are! It's science!"

      expect(returned_json["posts"][0]["title"]).to eq "I Love Me A Good Sandwhich"
      expect(returned_json["posts"][0]["location"]).to eq "Pittsburgh"
      expect(returned_json["posts"][0]["body"]).to eq "They taste so delish."
    end
  end

  describe "GET/show" do
    it "should return an individual post" do
      get :show, params: {id: post1.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json["post"].length).to eq 14

      expect(returned_json["post"]["title"]).to eq "Mushrooms are from Space!"
      expect(returned_json["post"]["body"]).to eq "They truly are! It's science!"
      expect(returned_json["post"]["user"]["email"]).to eq "john@gmail.com"


    end
  end

  describe "POST#create" do
    it "returns a 401 authentication error when not logged in" do
      post_json = {
        post: {
          title: "Musrooms are from the Future",
          body: "They really are amazing, man",
          photos: {url: "image.jpg"}
        }
      }

      post :create, params: post_json, format: :json
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 401
    end
    it "creates a new blog post" do
      user = FactoryBot.create(:user)
      sign_in user
      post_json = {
        post: {
          title: "Mushrooms are from the Future",
          body: "They really are amazing, man.",
          photos: {url: "image.jpg"},
          user: user
        }
      }

      prev_count = Post.count
      post :create, params: post_json, format: :json
      expect(Post.count).to eq(prev_count + 0)
    end
  end

end
