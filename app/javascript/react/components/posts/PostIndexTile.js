import React from 'react'
import { HideUntilLoaded } from 'react-animation'
import { Link } from 'react-router-dom'

const PostIndexTile = (props) => {
  return (
    <div className="column small-12 post-tile">
      <HideUntilLoaded
        animationIn="fadeIn"
        >
        <h2>{props.title}</h2>
        <br/>
        <Link to={`posts/${props.id}`}>Read More</Link>
      </HideUntilLoaded>
    </div>
  )
}

export default PostIndexTile
