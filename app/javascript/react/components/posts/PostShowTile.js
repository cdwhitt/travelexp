import React from 'react'


const PostShowTile = (props) => {

  return (
    <div className="columns small-12">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  )
}

export default PostShowTile
