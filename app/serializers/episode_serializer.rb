class EpisodeSerializer < ActiveModel::Serializer
  attributes :id, :link, :title, :description, :number, :isFeatured
end
