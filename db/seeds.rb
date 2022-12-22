# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "seeding users..."

harrison = User.create(username: "harriwilson5534", password: "har123", avatar: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/temura-morrison-the-book-of-boba-fett-1638803896.jpg?crop=0.630xw:1.00xh;0.0539xw,0&resize=480:*", email: "harriwilson5534@gmail.com", hasVoted: false, isAdmin: true, newsletter: false, notifications: true)
molly = User.create(username: "mcgintymolly", password: "mawls123", avatar: "https://lumiere-a.akamaihd.net/v1/images/max-rebo-main_df002ffc.jpeg?region=0%2C0%2C1280%2C721", email: "starweebspod@gmail.com", hasVoted: false, isAdmin: true, newsletter: false, notifications: false)
timmy = User.create(username: "timmy", password: "tim123", avatar: "https://i1.sndcdn.com/artworks-000612915041-4oe9at-t500x500.jpg", email: "backyardfilms15@gmail.com", hasVoted: false, isAdmin: false, newsletter: false, notifications: true)
aj = User.create(username: "ayjayran", password: "ayjay123", avatar: "https://i.pinimg.com/736x/1b/ab/c9/1babc93ad8ef07c0d11770dc42e718a2.jpg", email: "hdubsgaming@gmail.com", hasVoted: false, isAdmin: false, newsletter: false, notifications: true)




puts "seeding episodes"

ep2 = Episode.create(title: "The Phantom Menace and Free! Iwatobi Swim Club", description: "This week, Molly and Harrison swap fandoms, and they each learn a bit more about Star Wars and Anime. Molly watches Star Wars Episode I: The Phantom Menace, not for the first time, but with a new perspective. Harrison watches the first 3 episodes of Free! Iwatobi Swim Club, and his life is changed forever.", number: 2, isFeatured: false, link: "https://open.spotify.com/episode/0QaBgfYUYUyoA0kroqZ6fO?si=0947761882d44fe0")
ep3 = Episode.create(title: "Star Wars: Visions Pt. 1", description: "The moment Harrison and Molly have been waiting for is finally here! Star Wars: Visions, the first anime set in the Star Wars universe, has debuted at last. Our fearless duo answers the call to review this series with their respective expertise. This week, they'll cover The Duel, Tatooine Rhapsody, and The Twins. They'll also close this episode out with a Death Battle!!! WARNING: The Death Battle section contains various sound effects from Anime and Star Wars. They may be startling if they're not expected.", number: 3, isFeatured: false, link: "https://open.spotify.com/episode/7HbEijqc209SbZv3DScsAS?si=83728127aa07422b")
ep29 = Episode.create(title: "The Book of Boba Fett", description: "This time, Molly and Harrison cover The Book of Boba Fett! Some fans love this show, others hate it. What will Molly think? Is Din Djarin enough to save this show? Molly also gives some SHOCKING updates on her One Piece watch-through, and Harrison starts a daunting watch-through of his own...", number: 29, isFeatured: true, link: "https://open.spotify.com/episode/3yzjkMrtl8mBEH3YFP21KW?si=ade40e8898274ee6")


puts "seeding news stories..."
news1 = NewsStory.create(title: "The Super Mario Bros Japanese cast is where it's at", description: "Universal Pictures and Nintendo announced the official Japanese voice cast for The Super Mario Bros Movie, which will come out in 2023. There are also some new trailers for it, as well as a Japanese version of it. The majority of this cast are highly prolific and award-winning voice actors. You can check out what the cast sounds like in the Japanese version of the The Super Mario Bros Movie trailer.", link: "https://www.siliconera.com/japanese-cast-for-the-super-mario-bros-movie-includes-mamoru-miyano/", image: "https://animecorner.me/wp-content/uploads/2022/11/Mario-JP-Dub.jpg", user_id: 2)
news2 = NewsStory.create(title: "'Andor' Is the Best 'Star Wars' Since 'The Last Jedi'", description: 'We know it all took place a long time ago, in a galaxy far, far away. But until "Andor," the franchise was beginning to feel stuck in the past.', link: "https://www.indiewire.com/2022/12/andor-is-the-best-star-wars-since-the-last-jedi-1234790362/", image: "https://www.indiewire.com/wp-content/uploads/2022/12/Andor.jpeg", user_id: 1)
news3 = NewsStory.create(title: "Disney Reveals First Look at Rosario Dawson's Ahsoka Show", description: "Ahsoka will continue to expand the story of Rosario Dawson's titular Jedi, and the first brief look from the upcoming Disney+ series offered a glimpse of what to expect.", link: "https://thedirect.com/article/ahsoka-rosario-dawson-ahsoka-disney-show-video-look", image: "https://images.thedirect.com/media/photos/ahsoka-f-1.jpg", user_id: 1)
news4 = NewsStory.create(title: "One Piece Film Red Sails Through Japan Box Office Top 10 for 20 Consecutive Weeks", description: "Despite massive hits like THE FIRST SLAM DUNK and Suzume opening in Japan, One Piece Film Red continues its journey through the Japanese box office with official reports today revealing that the film has now spent 20 consecutive weeks in the top 10, beating the likes of the original Avatar, Weathering With You and Frozen.", link: "https://www.crunchyroll.com/anime-news/2022/12/19/one-piece-film-red-sails-through-japan-box-office-top-10-for-20-consecutive-weeks", image: "https://img1.ak.crunchyroll.com/i/spire2/3cc622bba797a81984c7e437b39bd3461662992599_main.jpg", user_id: 2)


puts "seeding favorites..."
fav1 = Favorite.create(user_id: harrison.id, episode_id: ep2.id)
fav2 = Favorite.create(user_id: harrison.id, episode_id: ep3.id)
fav3 = Favorite.create(user_id: harrison.id, episode_id: ep29.id)
fav4 = Favorite.create(user_id: aj.id, episode_id: ep29.id)
fav5 = Favorite.create(user_id: molly.id, episode_id: ep3.id)