import {useEffect, useState} from "react"
import NewsStoryCard from "./NewsStoryCard"
function NewsStories() {
    const [harrisonStories, setHarrisonStories] = useState([])
    const [mollyStories, setMollyStories] = useState([])


    useEffect(() => {
        fetch("harrisonstories")
        .then(resp => resp.json())
        .then(data => {

            setHarrisonStories(data)
        })
        fetch("mollystories")
        .then(resp => resp.json())
        .then(data => {

            setMollyStories(data)
        })
    }, [])

    const harrisonStoriesElements = harrisonStories.map((story) => {
        return(
            <NewsStoryCard userClass={"harrisonStory"} story={story} key={story.title}/>
        )
    })

    const mollyStoriesElements = mollyStories.map((story) => {
        return(
            <NewsStoryCard userClass={"mollyStory"} story={story} key={story.title}/>
        )
    })

    return(
        <>
        <br/>
        <h1 className="pageHeader">News</h1>
        <div className="newsContainer">
            <div id="harrisonStoryContainer">
                <h2>Star Wars News</h2>
                {harrisonStoriesElements}
            </div>

            <div id="mollyStoryContainer">
                <h2>Anime News</h2>
                {mollyStoriesElements}
            </div>
            
        </div>
        </>
    )
}

export default NewsStories