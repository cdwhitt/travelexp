import React, { useState, useEffect } from 'react'
import PostIndexTile from './PostIndexTile'
import PostsSearch from './PostsSearch'

const PostsIndexContainer = (props) => {
  const [posts, setPosts] = useState(null)
  const [users, setUsers] = useState([])

  const handleSearchSubmit = (searchField) => {
    event.preventDefault()
    fetch('/api/v1/posts/search.json', {
      method: 'POST',
      body: JSON.stringify({
        search_string: searchField
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
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
  }

  let postTiles = []

  if (posts !== null) {
    let userEmail = ""
    postTiles = posts.map(post => {
      users.map(user => {
        if (user.id === post.user_id) {
          userEmail = user.email
        }
      })
      return (
        <PostIndexTile
          id={post.id}
          key={post.id}
          title={post.title}
          body={post.body}
          userEmail={userEmail}
          latitude={post.latitude}
          longitude={post.longitude}
        />
      )
    })
  }

  let results

  if (posts !== null && posts.length === 0) {
    results =
    <div className="column small-12 post-tile">
      <div className="row">
        <div className="columns small-12">
          <h1 className="text-center">No results! Try another term.</h1>
          </div>
        </div>
      </div>
  }

  return (
    <>
      <div className="row">
        <div className="columns large-12">
          <PostsSearch
            handleSearchSubmit={handleSearchSubmit}
          />
        </div>
      </div>
      <div className="row post-tile-container">
        {results}
        {postTiles}
      </div>
    </>
  )
}

export default PostsIndexContainer
