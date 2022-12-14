class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :isAdmin, :avatar, :hasVoted, :newsletter, :notifications, :password
end
