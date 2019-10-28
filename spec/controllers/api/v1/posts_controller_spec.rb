require "rails_helper"

RSpec.describe Api::V1::PostsController, type: :controller do
  let!(:post1) { Post.create(
    title: "Mushrooms are from Space!",
    body: "They truly are! It's science!"
  ) }

  let!(:post2) { Post.create(
    title: "I Love Me A Good Sandwhich",
    body: "They taste so delish."
  ) }

  describe "GET#index" do
    it "should return a list of all blog posts" do
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["posts"].length).to eq 2
      expect(returned_json["posts"][0].length).to eq 3
      expect(returned_json["posts"][1].length).to eq 3

      expect(returned_json["posts"][0]["title"]).to eq "Mushrooms are from Space!"
      expect(returned_json["posts"][0]["body"]).to eq "They truly are! It's science!"

      expect(returned_json["posts"][1]["title"]).to eq "I Love Me A Good Sandwhich"
      expect(returned_json["posts"][1]["body"]).to eq "They taste so delish."
    end
  end

  describe "GET/show" do
    it "should return an individual post" do
      get :show, params: {id: post1.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json["post"].length).to eq 3

      expect(returned_json["post"]["title"]).to eq "Mushrooms are from Space!"
      expect(returned_json["post"]["body"]).to eq "They truly are! It's science!"

    end
  end

  describe "POST#create" do
    it "creates a new blog post" do

      post_json = {
        post: {
          title: "Mushrooms are from the Future",
          body: "They really are amazing, man."
        }
      }

      prev_count = Post.count
      post :create, params: post_json, format: :json
      expect(Post.count).to eq(prev_count + 1)
    end
  end

end
