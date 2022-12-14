import {useState} from "react"

function NewEpisodeForm () {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [number, setNumber] = useState(null)
    const [link, setLink] = useState("")
    const [featured, setFeatured] = useState(true)

    const newEpObj = {
        title: title,
        description: desc,
        number: number,
        link: link,
        isFeatured: featured
    }

    function handleNewEpisodeSubmit(e) {
        e.preventDefault()
        // console.log(newEpObj)
        fetch("/episodes", {
            method: "POST",
            headers: { "content-type" : "application/json"},
            body: JSON.stringify(newEpObj)
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
    }





    return(
        <div>
            <form onSubmit={handleNewEpisodeSubmit}>
                <input type="text" name="epTitle" placeholder="Episode Title" onChange={e=>setTitle(e.target.value)}></input>
                <br />
                <input type="text" name="epDescription" placeholder="Episode Description" onChange={e=>setDesc(e.target.value)}></input>
                <br />
                <input type="number" placeholder="Episode Number" onChange={e=>setNumber(e.target.value)}></input>
                <br />
                <input type="text" placeholder="Episode Link" onChange={e=>setLink(e.target.value)}></input>
                <br />
                Featured Episode?
                <select onChange={e=>setFeatured(e.target.value)}>
                    <option value={false}>false</option>
                    <option value={true}>true</option>
                </select>

                <br />
                <button type="submit">Create Episode</button>
            </form>
        </div>
    )
}

export default NewEpisodeForm;