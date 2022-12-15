class CreateNewsletters < ActiveRecord::Migration[7.0]
  def change
    create_table :newsletters do |t|
      t.string :title
      t.text :description
      t.boolean :sent, default: false

      t.timestamps
    end
  end
end
