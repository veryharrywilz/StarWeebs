# include "bcrypt"


class User < ApplicationRecord
    has_secure_password
    has_many :favorites, dependent: :destroy 
    has_many :episodes, through: :favorites
    require 'sendgrid-ruby'
    include SendGrid

    def send_mass_email(subj, mess) 
        from = Email.new(email: 'harriwilson5534@gmail.com')
        to = Email.new(email: "#{self.email}") 
        subject = "#{subj}"
        content = Content.new(type: 'text/plain', value: "#{mess}")
        mail = Mail.new(from, subject, to, content)
        
        sg = SendGrid::API.new(api_key: Rails.application.credentials.sendgrid_api_key)
        response = sg.client.mail._('send').post(request_body: mail.to_json)
        puts response.status_code
        puts response.body
        puts response.headers
    end
    
    def sendWelcomeEmail
        from = Email.new(email: 'starweebspod@gmail.com')
        to = Email.new(email: "#{self.email}") 
        subject = "Welcome to the Star Weebs Community!!"
        content = Content.new(type: 'text/plain', value: "Thanks so much for joining our little podcasting community. We appreciate your support! In order to stay up to date with future episodes, make sure you've opted in to recieve notifications when new episodes go live. Thank you for being here, and ANIME THE FORCE BE WITH YOU!")
        mail = Mail.new(from, subject, to, content)
        
        sg = SendGrid::API.new(api_key: Rails.application.credentials.sendgrid_api_key)
        response = sg.client.mail._('send').post(request_body: mail.to_json)
        puts response.status_code
        puts response.body
        puts response.headers
    end

end
