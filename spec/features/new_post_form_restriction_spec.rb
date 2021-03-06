require 'rails_helper'

feature 'user signs in and visits new post form', %Q{
  As a signed up user
  I want to sign in
  So I can visit the new post form page
} do
  scenario 'sees new post form page' do
    user = FactoryBot.create(:user)

    visit new_user_session_path

    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password

    click_button 'Log in'

    visit posts_new_path

    expect(page).to have_current_path('/posts/new')
  end
end
