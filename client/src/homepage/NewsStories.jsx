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
        <h1>News</h1>
        <div className="newsContainer">
            <div id="harrisonStoryContainer">
                {harrisonStoriesElements}
            </div>

            <div id="mollyStoryContainer">
                {mollyStoriesElements}
            </div>
            
        </div>
        </>
    )
}

export default NewsStories