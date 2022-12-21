import {useEffect, useState} from "react"
import EpisodeCard from "./EpisodeCard"

function Episodes () {

const [episodes, setEpisodes] = useState([])

    useEffect(()=>{
        fetch("/episodes")
        .then(resp => resp.json())
        .then(data => setEpisodes(data))
    }, [])

    const episodeElements = episodes.map(episode => {
        if (episodes.length > 0) {
        return(
            <EpisodeCard episode={episode} key={episode.id}/>
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