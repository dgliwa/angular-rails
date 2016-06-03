require 'rails_helper'

describe 'api/names/index.jbuilder' do
  it 'renders names in a json array' do
    @names = ['michael scott', 'holly flax', 'jim halpert', 'dwight schrute', 'stanley hudson']

    render

    expect(rendered).to eq([{ name: 'michael scott' },
                            { name: 'holly flax' },
                            { name: 'jim halpert' },
                            { name: 'dwight schrute' },
                            { name: 'stanley hudson' }].to_json)
  end
end
