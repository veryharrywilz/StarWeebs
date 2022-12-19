class NewsStorySerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :link, :image
  has_one :user
end
