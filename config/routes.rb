Rails.application.routes.draw do
  namespace :api do

  resources :reviews, only: [:index, :show, :create, :destroy, :update] 
  resources :companies, only: [:index, :show, :create, :destroy, :update] 
  # resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy"
  
  end
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
