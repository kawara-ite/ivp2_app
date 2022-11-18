Rails.application.routes.draw do
  root to: 'indicated_values#index'
  resources :indicated_values, only: [:index, :create, :new]
end
