import React, { useState, useEffect } from 'react'
import PostShowTile from './PostShowTile'

const PostShowContainer = (props) => {
  const [post, setPost] = useState({
    title: "",
    body: ""
  })

  let postId = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/posts/${postId}`)
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
      setPost(body.post)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])



  return (
    <div>
      <PostShowTile
        title={post.title}
        body={post.body}
      />
    </div>
  )
}

export default PostShowContainer
