import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            error: ""
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(reponse => {
                console.log(reponse);
                this.setState({ posts: reponse.data });
            })
            .catch(error => {
                console.log("Error", error)
                this.setState({error: 'Error retrieveing data' })
            })
    }

    render() {
        const { posts, error } = this.state
        return (
            <div>
                List Post
                {
                    posts.length ?
                        posts.map(
                            post => {
                                return (
                                    <div key={post.id}>
                                        {post.title}
                                    </div>
                                )
                            }
                        ) : null                     
                }
                {
                    error ? <div>{error}</div> : null
                }
            </div>
        )
    }
}

export default PostList
