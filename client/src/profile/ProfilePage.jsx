import { useEffect, useState } from "react"
import NewEpisodeForm from "../admin components/NewEpisodeForm"
import NewEmailForm from "../admin components/NewEmailForm"
import NewsStoryForm from "../admin components/NewsStoryForm"

function ProfilePage({ user }) {
    const [adminStatus, setAdminStatus] = useState(false)
    const [formDisplay, setFormDisplay] = useState(null)

    // function handleClick() {
    //     console.log(adminStatus)
    // }

    useEffect(() => {
        if (user !== null) {
            setAdminStatus(user.isAdmin)
        }
        else {
            setAdminStatus(false)
        }
    }, [user])


    return (

        <>

            {
                user !== null ?
                    <div>

                        <img src={user.avatar} className="profilePicture" />

                        <h2>This is {user.username}'s homepage</h2>
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

                    </div>
                    : null}
        </>

    )
}

export default ProfilePage;