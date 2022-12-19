# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_12_19_181926) do
  create_table "episodes", force: :cascade do |t|
    t.string "link"
    t.string "title"
    t.string "description"
    t.integer "number"
    t.boolean "isFeatured"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "favorites", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "episode_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["episode_id"], name: "index_favorites_on_episode_id"
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "news_stories", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.string "link"
    t.string "image"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_news_stories_on_user_id"
  end

  create_table "newsletters", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.boolean "sent", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.boolean "isAdmin"
    t.string "avatar"
    t.boolean "hasVoted"
    t.boolean "newsletter"
    t.boolean "notifications"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "favorites", "episodes"
  add_foreign_key "favorites", "users"
  add_foreign_key "news_stories", "users"
end
