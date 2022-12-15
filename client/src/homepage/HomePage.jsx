import React, { useEffect } from "react";

import HomePageNavBar from "./HomePageNavBar";


function HomePage({ user, loginUser }) {
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
        </div>
    )
}

export default HomePage;