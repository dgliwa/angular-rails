class Api::NamesController < ApplicationController
  def index
    @names = ['michael scott', 'holly flax', 'jim halpert', 'dwight schrute', 'stanley hudson']
  end
end
