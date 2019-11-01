import React, { useState, useEffect } from 'react'
import VotesTile from './VotesTile'


const PostShowTile = (props) => {
  const [votes, setVotes] = useState([])

  useEffect(() => {
    fetch(`/api/v1/posts/${props.postId}/votes`)
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
      setVotes(body.votes)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const handleVoteClick = (voteInfo) => {
    fetch(`/api/v1/posts/${props.postId}/votes`, {
      credentials: "same-origin",
      method: 'POST',
      body: JSON.stringify(voteInfo),
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
      setVotes(body.votes)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }


  return (
    <>
      <div className="columns small-12">
        <h1 className="post-title">{props.title}</h1>
        <p className="post-author">By: {props.author}</p>
        <p className="post-body">{props.body}</p>
      </div>
      <div className="columns small-12">
        <VotesTile
          handleVoteClick={handleVoteClick}
          votes={votes}
        />
      </div>
    </>
  )
}

export default PostShowTile
