# Load the Rails application.
require_relative "application"

# Initialize the Rails application.
Rails.application.initialize!

ActionMailer::Base.smtp_settings = {
  :user_name => 'apikey', # This is the string literal 'apikey', NOT the ID of your API key
  :password => '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', # This is the secret sendgrid API key which was issued during API key creation
  :domain => 'starweebs.com',
  :address => 'smtp.sendgrid.net',
  :port => 587,
  :authentication => :plain,
  :enable_starttls_auto => true
}