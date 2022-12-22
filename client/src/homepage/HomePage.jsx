import React, { useEffect, useState } from "react";
import EpisodeCard from "./EpisodeCard";
import HomePageNavBar from "./HomePageNavBar";
import StarWeebsLogo from "../images/StarWeebLogo.png"


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
            <EpisodeCard user={user} episode={episode} key={episode.title} />
        )
    })

    const Greeting = () => {
        if (user === null) {
            return (
                <>
                
                <h1 className="pageHeader">Welcome to the Star Weebs Website!</h1>
                
                </>
            )
        }
        else if (user.username !== null) {
            return (<h1 className="pageHeader">Hello {user.username}</h1>)
        }
        else {
            return (
                <h1 className="pageHeader">Welcome to the Star Weebs Website!</h1>
            )
        }
    }

    return (
        <div>
            <br/>
            <Greeting />
            <br />
            <HomePageNavBar />
            <br />
            <br />
            <img alt="Star Weebs Logo" className="SWLogo" src={StarWeebsLogo} />
            <h2>Featured Episodes</h2>
            <div className="episodeContainer">
                {featuredEpsElements}
            </div>
        </div>
    )
}

export default HomePage;