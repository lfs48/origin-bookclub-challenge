# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                      root GET    /                                                                                        static_pages#root
#                 api_users GET    /api/users(.:format)                                                                     api/users#index {:format=>:json}
#                           POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#                  api_user GET    /api/users/:id(.:format)                                                                 api/users#show {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#                 api_books GET    /api/books(.:format)                                                                     api/books#index {:format=>:json}
#                           POST   /api/books(.:format)                                                                     api/books#create {:format=>:json}
#                  api_book GET    /api/books/:id(.:format)                                                                 api/books#show {:format=>:json}
#                           PATCH  /api/books/:id(.:format)                                                                 api/books#update {:format=>:json}
#                           PUT    /api/books/:id(.:format)                                                                 api/books#update {:format=>:json}
#                           DELETE /api/books/:id(.:format)                                                                 api/books#destroy {:format=>:json}
#             api_favorites POST   /api/favorites(.:format)                                                                 api/favorites#create {:format=>:json}
#              api_favorite DELETE /api/favorite(.:format)                                                                  api/favorites#destroy {:format=>:json}
#                 api_notes GET    /api/notes(.:format)                                                                     api/notes#index {:format=>:json}
#                           POST   /api/notes(.:format)                                                                     api/notes#create {:format=>:json}
#                  api_note GET    /api/notes/:id(.:format)                                                                 api/notes#show {:format=>:json}
#                           PATCH  /api/notes/:id(.:format)                                                                 api/notes#update {:format=>:json}
#                           PUT    /api/notes/:id(.:format)                                                                 api/notes#update {:format=>:json}
#                           DELETE /api/notes/:id(.:format)                                                                 api/notes#destroy {:format=>:json}
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy]
    resources :books, only: [:index, :create, :show, :update, :destroy]
    resources :favorites, only: [:create]
    resource :favorite, only: [:destroy]
    resources :notes, only: [:index, :create, :show, :update, :destroy]
  end

end
