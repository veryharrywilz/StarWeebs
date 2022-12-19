import {useEffect, useState} from "react"

function NewsStoryCard({story, userClass}) {
    // const [userClass, setUserClass] = useState("")

    // useEffect(() => {
    //     if (story.user.id === 1) {
    //         setUserClass("harrisonStory")
    //     } 
    //     else if (story.user.id === 2) {
    //         setUserClass("mollyStory")
    //     }
    //     else {
    //         setUserClass(null)
    //     }
    // }, [])



    return(
        <div className={userClass}>
            <h3>{story.title}</h3>
            <p>{story.description}</p>
        </div>
    )
}

export default NewsStoryCard;