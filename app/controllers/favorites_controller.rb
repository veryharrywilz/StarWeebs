class FavoritesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def destroy
        fav = Favorite.find_by(episode_id: params[:id])
        ep = Episode.find(params[:id])
        fav.destroy 
        render json: ep, status: :gone
    end

    def create
        fav = Favorite.create(fav_params)
        render json: fav, status: :created
    end

    private

    def fav_params
        params.permit(:user_id, :episode_id)
    end

end
