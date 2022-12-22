import { useState } from "react";
import favIcon from "../images/FavoriteIcon.png"
import unFavIcon from "../images/UnFavoriteIcon.png"

function EpisodeCard({ episode, user, favStatus }) {
    const [pageFavStatus, setPageFavStatus] = useState(favStatus)


    function handleDelete() {
        fetch(`/episodes/${episode.id}`, {
            method: 'DELETE',
            headers: { "content-type": "application/json" },
        })
            .then(resp => resp.json())
            .then(data => console.log(data))
    }

    function handleFavClick(){
        setPageFavStatus(pageFavStatus => !pageFavStatus)

        fetch('/addtofavs', {
            method: 'POST',
            headers: { "content-type" : "application/json" },
            body: JSON.stringify({
                user_id: user.id,
                episode_id: episode.id
            })
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
                        {
                            user.isAdmin === true ?
                                <>

                                    <br />
                                    <button onClick={e => handleDelete()}>Delete</button>
                                </>
                                : null
                        }
                        {
                            pageFavStatus ?
                                <img className="favicon" src={favIcon} alt="isFav"/>
                                : <img className="favicon" src={unFavIcon} alt="notFav" onClick={e => handleFavClick()}/>
                        }
                    </>
                    : null
            }
        </div>
    )
}

export default EpisodeCard;