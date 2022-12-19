class NewsStoriesController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create
        story = NewsStory.create!(news_params)
        render json: story, status: :created
    end

    def index 
        stories = NewsStory.all
        render json: stories, status: :ok
    end

    def harrisonstories
        hs = NewsStory.where(user_id: 1)
        render json: hs, status: :ok 
    end

    def mollystories
        ms = NewsStory.where(user_id: 2)
        render json: ms, status: :ok 
    end

    private

    def news_params
        params.permit(:title, :description, :user_id, :link, :image)
    end
end
