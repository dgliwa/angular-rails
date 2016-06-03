require 'rails_helper'

RSpec.describe Api::NamesController, type: :controller do
  describe 'GET#index' do
    it 'assigns names to be a list of names' do
      get :index
      expect(assigns(:names)).to eq(['michael scott', 'holly flax', 'jim halpert', 'dwight schrute', 'stanley hudson'])
    end
  end
end
