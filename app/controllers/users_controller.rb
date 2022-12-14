class UsersController < ApplicationController

    skip_before_action :verify_authenticity_token

    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user, status: :ok 
    end


    def create
        user = User.create!(username: params[:username], email: params[:email], password: params[:password], isAdmin: params[:isAdmin], hasVoted: params[:hasVoted], avatar: params[:avatar], newsletter: params[:newsletter], notifications: params[:notifications])
        user = User.create!(user_params)
        
        if user.valid?
            # byebug
            session[:user_id] = user.id 
            # session[:admin_status] = user.isAdmin
        render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end
    
    private 

    def user_params
        params.permit(:username, :email, :isAdmin, :avatar, :hasVoted, :newsletter, :notifications, :password)
    end



end
