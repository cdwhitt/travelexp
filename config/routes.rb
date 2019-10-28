Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  get '/posts', to: "static_pages#index"
  get '/posts/new', to: "static_pages#new"
  get '/posts/:id', to: "static_pages#index"

  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index, :show, :create, :new]
    end
  end
end
