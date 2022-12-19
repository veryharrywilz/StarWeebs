import React, { useEffect, useState } from "react";
import EpisodeCard from "./EpisodeCard";
import HomePageNavBar from "./HomePageNavBar";


function HomePage({ user, loginUser }) {
    const [featuredEps, setFeaturedEps] = useState([])

    useEffect(() => {
        fetch("/featuredepisodes")
            .then(resp => {
                if (resp.ok) {
                    resp.json()
                        .then(data => {
                            setFeaturedEps(data)
                        })
                }
            })
    }, [])

    const featuredEpsElements = featuredEps.map(episode => {
        return (
            <EpisodeCard episode={episode} key={episode.title} />
        )
    })

    const Greeting = () => {
        if (user === null) {
            return (
                <h1>Hello!</h1>
            )
        }
        else if (user.username !== null) {
            return (<h1>{`Hello ${user.username}`}</h1>)
        }
        else {
            return (
                <h1>Hello!</h1>
            )
        }
    }

    return (
        <div>
            <img alt="Star Weebs Logo" className={"SWLogo"} src="https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded400/17651902/17651902-1632697977806-a977aa1f39a8f.jpg" />
            <br />
            <HomePageNavBar />
            <Greeting />
            <h2>Featured Episodes</h2>
            <div className="episodeContainer">
                {featuredEpsElements}
            </div>
        </div>
    )
}

export default HomePage;