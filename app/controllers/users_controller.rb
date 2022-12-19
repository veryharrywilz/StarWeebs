

class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token

    require 'sendgrid-ruby'
    include SendGrid

    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        # if session[:user_id]
            user = User.find_by(id: session[:user_id])
            render json: user, status: :ok 
        # else
            # head json: {id: 0}, status: :unauthorized
        # end
    end


    def create

        # user = User.create(username: params[:username], email: params[:email], password: params[:password], isAdmin: params[:isAdmin], hasVoted: params[:hasVoted], avatar: params[:avatar], newsletter: params[:newsletter], notifications: params[:notifications])
        user = User.create!(user_params)
       
        session[:user_id] = user.id 
        render json: user, status: :created
    end

    def send_email 
        # byebug 
        subscribers = User.where(notifications: true)
        subscribers.each do |subscriber|
            subscriber.send_mass_email(subj.values[0], message.values[0])
        end
        render json: subscribers, status: :created

    end
    
    private 

    def user_params
        params.permit(:username, :email, :isAdmin, :avatar, :hasVoted, :newsletter, :notifications, :password)
    end

    def subj
        params.permit(:subject)
    end

    def message
        params.permit(:message)
    end



end
