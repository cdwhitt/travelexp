require 'rails_helper'

RSpec.describe Comment, type: :model do
  it { should belong_to :post }
  it { should belong_to :user }

  it { should have_valid(:body).when("I loved this post") }
  it { should_not have_valid(:body).when(nil, "") }
end
