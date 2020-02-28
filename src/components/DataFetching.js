import React from 'react'
import axios from 'axios'

export default function DataFetching() {

    const [posts, setposts] = React.useState([])
    const [value, setvalue] = React.useState("")
    const [id, setid] = React.useState("")
    


    React.useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                console.log("Response", response)
                if (Array.isArray(response.data))
                    setposts(response.data);
                else
                    setposts([response.data])
            })
            .catch(error => {
                console.log("Error", error)
            })
    }, [id])


    return (
        <ul>
            <input type="text" value={value} onChange={e => setvalue(e.target.value)} />
            <button type="button" onClick={e => setid(value)} >Buscar</button>
            {
                posts.map(post => (
                    <li key={post.id}>
                        {post.title}
                    </li>
                ))
            }
        </ul>
    )
}
