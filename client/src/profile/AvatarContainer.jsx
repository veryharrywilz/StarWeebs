import AvatarSelectionCards from "./AvatarSelectionCards"

function AvatarContainer() {

    const luke = "https://media.gq-magazine.co.uk/photos/620529e268071f7ecff06fac/1:1/w_1080,h_1080,c_limit/100222_Bobba_hp.jpg"
    const deku = "https://i.pinimg.com/736x/1b/ab/c9/1babc93ad8ef07c0d11770dc42e718a2.jpg"
    const obiwan = "https://pyxis.nymag.com/v1/imgs/367/895/b06700f7cc976e0c87ee4489ff71ec41f9-21-obi-wan.rsquare.w700.jpg"
    const luffy = "https://i.pinimg.com/originals/4c/cf/da/4ccfdaf6092dc341376e6fdb8130d09d.jpg"
    const ahsoka = "https://www.syfy.com/sites/syfy/files/styles/amp_featured_image/public/ahsoka-in-star-wars-the-clone-wars1.jpg?h=d9a86520"
    const mikasa = "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Mikasa-Ackermann.Attack-on-Titan.webp"
    const rex = "https://source.superherostuff.com/wp-content/uploads/2016/03/captain-rex.jpg"
    const eren = "https://pm1.narvii.com/6717/853fa0542c4a453c28da102ab8bcad61c416de9c_hq.jpg"
    const leia = "https://i.pinimg.com/736x/fe/e8/66/fee8661151ba6a61d862c191051b64c0.jpg"
    const allmight = "https://www.looper.com/img/gallery/my-hero-academia-the-reason-all-might-is-the-most-powerful-teacher/intro-1596067346.jpg"
    const vader = "https://media.revistagq.com/photos/62a0a996223a33e985e4d59a/4:3/w_1199,h_899,c_limit/1072434_110615-cc-Darth-Vader-Thumb.jpg"
    const kageyama = "https://www.sosyncd.com/wp-content/uploads/2022/06/160.png"
    const boba = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/temura-morrison-the-book-of-boba-fett-1638803896.jpg?crop=0.630xw:1.00xh;0.0539xw,0&resize=480:*"
    const uraka = "https://i1.sndcdn.com/artworks-000612915041-4oe9at-t500x500.jpg"
    const rebo = "https://lumiere-a.akamaihd.net/v1/images/max-rebo-main_df002ffc.jpeg?region=0%2C0%2C1280%2C721"
    const ash = "https://www.looper.com/img/gallery/the-rich-history-behind-pokmons-ash-ketchum/l-intro-1667248605.jpg"

    const avatarArray = [luke, deku, obiwan, luffy, ahsoka, mikasa, rex, eren, leia, allmight, vader, kageyama, boba, uraka, rebo, ash]

    const avatarElements = avatarArray.map((avatar) => {
        console.log(avatar)
        return (
            <AvatarSelectionCards avatar={avatar} key={avatar}/>
        )
    })

    return(
        <div>
            <h4>Select an Avatar!</h4>
            {avatarElements}
        </div>
    )
}

export default AvatarContainer;