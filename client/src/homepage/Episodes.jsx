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
            <>
            <EpisodeCard episode={episode}/>
            <br />
            </>
        )
        } else {
            return null
        }
    })


    return (
        <div>
        <h1>Episodes</h1>
        {episodeElements}
        </div>
    )
}
export default Episodes