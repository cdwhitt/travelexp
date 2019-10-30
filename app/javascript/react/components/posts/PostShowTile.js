import React from 'react'


const PostShowTile = (props) => {

  return (
    <div className="columns small-12">
      <h1 className="post-title">{props.title}</h1>
      <p className="post-author">By: {props.author}</p>
      <p className="post-body">{props.body}</p>
    </div>
  )
}

export default PostShowTile
