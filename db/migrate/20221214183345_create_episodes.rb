class CreateEpisodes < ActiveRecord::Migration[7.0]
  def change
    create_table :episodes do |t|
      t.string :link
      t.string :title
      t.string :description
      t.integer :number
      t.boolean :isFeatured

      t.timestamps
    end
  end
end
