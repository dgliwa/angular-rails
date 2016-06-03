namespace :karma do
  task start: :environment do
    if Rails.env == 'test'
      with_tmp_config :start
    else
      system('rake karma:start RAILS_ENV=test')
    end
  end

  task run: :environment do
    if Rails.env == 'test'
      exit with_tmp_config :start, '--single-run'
    else
      system('rake karma:run RAILS_ENV=test')
    end
  end

  private

  def with_tmp_config(command, args = nil)
    Tempfile.open('karma_unit.js', Rails.root.join('tmp')) do |f|
      f.write unit_js(application_spec_files)
      f.flush

      system "./node_modules/karma/bin/karma #{command} #{f.path} #{args}"
    end
  end

  def application_spec_files
    Rails.application.assets.find_asset('application_spec.js').to_a.map { |e| e.pathname.to_s }
  end

  def unit_js(files)
    unit_js = File.open('spec/karma/config/unit.js', 'r').read
    unit_js.gsub 'APPLICATION_SPEC', "\"#{files.join("\",\n\"")}\""
  end
end
