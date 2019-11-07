import React from 'react'
import MapComponent from "./MapComponent"

import { HideUntilLoaded } from 'react-animation'
import { Link } from 'react-router-dom'

const PostIndexTile = (props) => {

  return (
    <div className="column small-12 post-tile">
      <div className="row">
        <div className="columns small-12 medium-6 large-6">
          <h2>{props.title}</h2>
          <br/>
            <span className="index-tile-author">
              By: {props.userEmail}
            </span>
            <br/>
          <Link to={`/posts/${props.id}`} className="more-button">
            Read More
          </Link>
        </div>
        <div className="columns small-12 medium-6 large-6">
          <MapComponent
            latitude={props.latitude}
            longitude={props.longitude}
            />
        </div>
      </div>
    </div>
  )
}

export default PostIndexTile
