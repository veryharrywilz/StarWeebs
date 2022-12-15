# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "seeding users..."

harrison = User.create(username: "harriwilson5534", password: "har123", avatar: "avatar", email: "harriwilson5534@gmail.com", hasVoted: false, isAdmin: true, newsletter: false, notifications: true)
timmy = User.create(username: "timmy", password: "tim123", avatar: "avatar", email: "backyardfilms15@gmail.com", hasVoted: false, isAdmin: false, newsletter: false, notifications: true)
aj = User.create(username: "ayjayran", password: "ayjay123", avatar: "avatar", email: "hdubsgaming@gmail.com", hasVoted: false, isAdmin: false, newsletter: false, notifications: true)




puts "seeding episodes"

ep2 = Episode.create(title: "The Phantom Menace and Free! Iwatobi Swim Club", description: "This week, Molly and Harrison swap fandoms, and they each learn a bit more about Star Wars and Anime. Molly watches Star Wars Episode I: The Phantom Menace, not for the first time, but with a new perspective. Harrison watches the first 3 episodes of Free! Iwatobi Swim Club, and his life is changed forever.", number: 2, isFeatured: false, link: "https://open.spotify.com/episode/0QaBgfYUYUyoA0kroqZ6fO?si=0947761882d44fe0")
ep3 = Episode.create(title: "Star Wars: Visions Pt. 1", description: "The moment Harrison and Molly have been waiting for is finally here! Star Wars: Visions, the first anime set in the Star Wars universe, has debuted at last. Our fearless duo answers the call to review this series with their respective expertise. This week, they'll cover The Duel, Tatooine Rhapsody, and The Twins. They'll also close this episode out with a Death Battle!!! WARNING: The Death Battle section contains various sound effects from Anime and Star Wars. They may be startling if they're not expected.", number: 3, isFeatured: false, link: "https://open.spotify.com/episode/7HbEijqc209SbZv3DScsAS?si=83728127aa07422b")
ep29 = Episode.create(title: "The Book of Boba Fett", description: "This time, Molly and Harrison cover The Book of Boba Fett! Some fans love this show, others hate it. What will Molly think? Is Din Djarin enough to save this show? Molly also gives some SHOCKING updates on her One Piece watch-through, and Harrison starts a daunting watch-through of his own...", number: 29, isFeatured: true, link: "https://open.spotify.com/episode/3yzjkMrtl8mBEH3YFP21KW?si=ade40e8898274ee6")
