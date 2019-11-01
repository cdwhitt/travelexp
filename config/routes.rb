Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  get '/posts', to: "static_pages#index"
  get '/posts/new', to: "static_pages#new"
  get '/posts/:id', to: "static_pages#index"
  get '/leaders', to: "static_pages#index"
  get '/users/:id', to: "static_pages#index"

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show]
      resources :posts, only: [:index, :show, :create, :new] do
        resources :votes, only: [:create, :index]
        resources :comments, only: [:create]
      end
    end
  end
end
