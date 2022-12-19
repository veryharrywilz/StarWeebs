Rails.application.routes.draw do
  resources :news_stories, only: [:index, :create]
  resources :newsletters, only: [:index, :create]
  resources :favorites
  resources :episodes, only: [:index, :show, :create, :update]
  resources :users, only: [:index, :create]

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"

  get "/me", to: "users#show"

  post "/sendit", to: "users#send_email"

  get "/featuredepisodes", to: "episodes#featured"

  get "harrisonstories", to: "news_stories#harrisonstories"

  get "mollystories", to: "news_stories#mollystories"

  # post "createaccount", to: "users#create"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
