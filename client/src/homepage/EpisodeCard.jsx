function EpisodeCard ({episode}) {
    return(
        <div className="episodeCard">
            <h3>Episode {episode.number}: {episode.title}</h3>
            <p>{episode.description}</p>
            <a href={episode.link} className="link">Click to listen!</a>
        </div>
    )
}

export default EpisodeCard;