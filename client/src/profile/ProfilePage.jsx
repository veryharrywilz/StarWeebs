import { useEffect, useState } from "react"
import NewEpisodeForm from "../admin components/NewEpisodeForm"
import NewEmailForm from "../admin components/NewEmailForm"
import NewsStoryForm from "../admin components/NewsStoryForm"
import EpisodeCard from "../homepage/EpisodeCard"
import ProfileEpisodeCard from "./ProfileEpisodeCard"

function ProfilePage({ user }) {
    const [adminStatus, setAdminStatus] = useState(false)
    const [formDisplay, setFormDisplay] = useState(null)
    const [favs, setFavs] = useState([])

    // function handleClick() {
    //     console.log(adminStatus)
    // }

    useEffect(() => {
        if (user !== null) {
            setAdminStatus(user.isAdmin)
            fetch("userfavs")
            .then(resp => resp.json())
            .then(data => setFavs(data))
        }
        else {
            setAdminStatus(false)
        }
    }, [user])


    const favsElements = favs.map(fav => {
            return (
                <ProfileEpisodeCard user={user} key={fav.episode.title} episode={fav.episode}/>
            )
    })


    return (

        <>
        <br/>
            {
                user !== null ?
                    <div>

                        <img src={user.avatar} className="profilePicture" />
                        <br/><br/><br/><br/><br/><br/><br/>
                        <h2>{user.username}</h2>
                        {
                            adminStatus ?
                                <>
                                    <button onClick={e => setFormDisplay("episode")}>Create New Episode</button>
                                    <button onClick={e => setFormDisplay("newsletter")}>Create a Newsletter</button>
                                    <button onClick={e => setFormDisplay("story")}>Create a News Story</button>
                                    {
                                    formDisplay === "episode" ?
                                        <>
                                            <h3>New Episode</h3>
                                            <NewEpisodeForm />
                                        </>
                                        : null}
                                    {formDisplay === "newsletter" ?
                                    <>
                                        <h3>Send an email</h3>
                                        <NewEmailForm />
                                    </>
                                    : null}
                                   { formDisplay === "story" ?
                                    <>
                                        <h3>Create a News Story</h3>
                                        <NewsStoryForm user={user} />
                                    </>
                                    : null
                                    }
                                </>


                        : null}
                        <h2>Your favorite episodes!</h2>
                        {favsElements}

                    </div>
                    : null}
        </>

    )
}

export default ProfilePage;