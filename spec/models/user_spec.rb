require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_many :posts }
  it { should have_many :comments }
  # it { should have_many :votes }

  it { should have_valid(:email).when("cwhitt91@gmail.com") }
  it { should_not have_valid(:email).when(nil, "") }
end
