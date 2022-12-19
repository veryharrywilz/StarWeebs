class EpisodesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        eps = Episode.all 
        render json: eps, status: :ok 
    end

    def create
        ep = Episode.create(episode_params)
        render json: ep, status: :created
    end

    def featured
        featureds = Episode.where(isFeatured: true)
        render json: featureds, status: :ok 
    end

    private

    def episode_params
        params.permit(:title, :description, :link, :number, :isFeatured)
    end

end
