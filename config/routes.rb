Rails.application.routes.draw do
  root 'dashboard#index'
  get 'dashboard/index'
  get 'dashboard/about'
  get 'dashboard/contact'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
