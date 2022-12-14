function EpisodeCard ({episode}) {
    return(
        <span>
            <h3>{episode.title}</h3>
            <p>{episode.description}</p>
        </span>
    )
}

export default EpisodeCard;