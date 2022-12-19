import {useState} from "react"
function NewsStoryForm({user}) {
    const [newTitle, setTitle] = useState("")
    const [newDescription, setDescription] = useState("")
    const [newLink, setLink] = useState("")
    const [newImage, setImage] = useState("")
    const newsStoryObj = {
        title: newTitle,
        description: newDescription,
        link: newLink,
        image: newImage,
        user_id: user.id
    }

    function newsStorySubmit(e) {
        e.preventDefault()
        fetch("/news_stories", {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(newsStoryObj)
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
    }


    return(
        <form onSubmit={e => newsStorySubmit(e)}>
            <p>Story Title</p>
            <input type="text" name="title" onChange={e => setTitle(e.target.value)}></input>
            <p>Story Description</p>
            <input type="text" name="description" onChange={e => setDescription(e.target.value)}></input>
            <p>Link to Story</p>
            <input type="text" name="link" onChange={e => setLink(e.target.value)}></input>
            <p>Preview Image Source</p>
            <input type="text" name="image" onChange={e => setImage(e.target.value)}></input>
            <button type="submit">Publish Story!</button>
        </form>
    )
}

export default NewsStoryForm;