import { useEffect, useState } from "react"
import NewEpisodeForm from "../admin components/NewEpisodeForm"
import NewEmailForm from "../admin components/NewEmailForm"

function ProfilePage({ user }) {
    const [adminStatus, setAdminStatus] = useState(false)

    function handleClick() {
        console.log(adminStatus)
    }

    useEffect(() => {
        if (user !== null) {
            setAdminStatus(user.isAdmin)
        }
        else {
            setAdminStatus(false)
        }
    }, [user])


    return (
        <div>
            <button onClick={e => handleClick()}>Admin?</button>
            {user !== null ?
                <div>
                    <h1>ProfilePage</h1>
                    <h2>This is {user.username}'s homepage</h2>
                    {
                        adminStatus ?
                            <>
                                <NewEpisodeForm />
                                <NewEmailForm />
                            </>
                            : null
                    }
                </div>
                : null}
        </div>
    )
}

export default ProfilePage;