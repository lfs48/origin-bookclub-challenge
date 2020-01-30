Rails.application.routes.draw do
  
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy]
    resources :books, only: [:index, :create, :show, :update, :destroy]
    resources :favorites, only: [:create, :destroy]
  end

end
