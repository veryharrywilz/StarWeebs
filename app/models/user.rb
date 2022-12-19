# include "bcrypt"


class User < ApplicationRecord
    has_secure_password
    require 'sendgrid-ruby'
    include SendGrid

    def send_mass_email(subj, mess) 
 
        from = Email.new(email: 'harriwilson5534@gmail.com')
        to = Email.new(email: "#{self.email}") 
        subject = "#{subj}"
        content = Content.new(type: 'text/plain', value: "#{mess}")
        mail = Mail.new(from, subject, to, content)
        
        # sg = SendGrid::API.new(api_key: "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")
        response = sg.client.mail._('send').post(request_body: mail.to_json)
        puts response.status_code
        puts response.body
        puts response.headers

    end

end