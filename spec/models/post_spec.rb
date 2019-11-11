require 'rails_helper'

RSpec.describe Post, type: :model do
  it { should belong_to :user }
  it { should have_many :comments }
  it { should have_many :votes }

  it { should have_valid(:title).when("Traveling to Canada") }
  it { should_not have_valid(:title).when(nil, "") }

  it { should have_valid(:body).when("It was really great") }
  it { should_not have_valid(:body).when(nil, "") }

  it { should have_valid(:location).when("Toronto") }
end
