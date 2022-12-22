import {useEffect, useState} from "react"
import EpisodeCard from "./EpisodeCard"

function Episodes ({user}) {

const [episodes, setEpisodes] = useState([])
const [epFavs, setEpFavs] = useState([])

    useEffect(()=>{
        fetch("/episodes")
        .then(resp => resp.json())
        .then(data => setEpisodes(data))
    }, [])


    useEffect(() => {
        if (user !== null) {
            fetch("userfavs")
            .then(resp => resp.json())
            .then(data => setEpFavs(data))
        }

    }, [])

    const usersFavEps = epFavs.map( fav => {
        return(fav.episode.title)
    })


    const episodeElements = episodes.map(episode => {
        if (episodes.length > 0) {
            let favStatus = usersFavEps.includes(episode.title)
            console.log(favStatus)
        return(
            <EpisodeCard favStatus={favStatus} user={user} episode={episode} key={episode.id} usersFavEps={usersFavEps}/>
        )
        } else {
            return null
        }
    })


    return (
        <div>
            <br/>
        <h1 className="pageHeader">Episodes</h1>
        <div className="episodeContainer">
        {episodeElements.reverse()}
        </div>
        </div>
    )
}
export default Episodes