import { useState } from "react"
import favIcon from "../images/FavoriteIcon.png"
import unFavIcon from "../images/UnFavoriteIcon.png"


function ProfileEpisodeCard({ episode, user, favStatus }) {

    const [pageFavStatus, setPageFavStatus] = useState(favStatus)


    function handleDelete({ episode, user, favStatus }) {
        fetch(`/episodes/${episode.id}`, {
            method: 'DELETE',
            headers: { "content-type": "application/json" },
        })
            .then(resp => resp.json())
            .then(data => console.log(data))
    }

    function handleFavClick() {
            fetch(`/favorites/${episode.id}`, {
                method: 'DELETE',
                headers: { "content-type": "application/json" }
            })
                .then(resp => resp.json())
                .then(data => console.log(data))
        }


    return (
        <div className="episodeCard">
            <h3 className="episodeTitle">Episode {episode.number}: {episode.title}</h3>
            <p>{episode.description}</p>
            <a href={episode.link} className="link">Click to listen!</a>
            {
                user !== null ?
                    <>
                    <br />
                    <br />
                        <button onClick={e => handleFavClick()}>Remove from favorites</button>
                        <br /> 
                        <br />
                    </>
                    : null
            }
        </div>
    )
}

export default ProfileEpisodeCard