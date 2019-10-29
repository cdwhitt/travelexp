import React from 'react'
import { HideUntilLoaded } from 'react-animation'

const PostShowTile = (props) => {

  return (
    <div className="row">
      <div className="columns small-12 show-post-tile">
        <HideUntilLoaded
          animationIn="fadeIn"
          >
          <h1>{props.title}</h1>
          <p>{props.body}</p>
        </HideUntilLoaded>
      </div>
    </div>
  )
}

export default PostShowTile
