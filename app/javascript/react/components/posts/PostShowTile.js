import React from 'react'

const PostShowTile = (props) => {

  return (
    <div>
      <h1>{props.title}</h1>
        <p>{props.body}</p>
    </div>
  )
}

export default PostShowTile
