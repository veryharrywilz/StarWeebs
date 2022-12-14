class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.boolean :isAdmin
      t.string :avatar
      t.boolean :hasVoted
      t.boolean :newsletter
      t.boolean :notifications
      t.string :password_digest

      t.timestamps
    end
  end
end