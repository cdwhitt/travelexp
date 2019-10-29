import React, { useState, useEffect } from 'react'
import PostIndexTile from './PostIndexTile'

const PostsIndexContainer = (props) => {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('api/v1/posts')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      setPosts(body.posts)
      setUsers(body.users)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const postTiles = posts.map(post => {

    return (
      <PostIndexTile
        id={post.id}
        key={post.id}
        title={post.title}
        body={post.body}
      />
    )
  })

  return (
    <div className="row post-tile-container">
      {postTiles}
    </div>
  )
}

export default PostsIndexContainer
