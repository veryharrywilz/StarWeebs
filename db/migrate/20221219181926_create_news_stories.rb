class CreateNewsStories < ActiveRecord::Migration[7.0]
  def change
    create_table :news_stories do |t|
      t.string :title
      t.text :description
      t.string :link
      t.string :image
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
