Rails.application.routes.draw do
  resources :news_stories, only: [:index, :create]
  resources :newsletters, only: [:index, :create]
  resources :favorites, only: [:create, :destroy]
  resources :episodes, only: [:index, :show, :create, :update]
  resources :users, only: [:index, :create]

  post "/login", to: "sessions#create"

  post 'addtofavs', to: "favorites#create"

  delete "/logout", to: "sessions#destroy"
  
  delete "/episodes/:id", to: "episodes#destroy"

  delete "/favorites/:episode_id", to: "favorites#destroy"

  get "/me", to: "users#show"

  post "/sendit", to: "users#send_email"

  get "/featuredepisodes", to: "episodes#featured"

  get "harrisonstories", to: "news_stories#harrisonstories"

  get "mollystories", to: "news_stories#mollystories"

  get "userfavs", to: "users#user_favs"



  # post "createaccount", to: "users#create"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
