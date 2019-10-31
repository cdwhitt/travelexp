import React from 'react'

const UserShowTile = (props) => {
  let postLength
  let commentLength

  if (props.posts) {
    postLength = props.posts.length
  }

  if (props.comments) {
    commentLength = props.comments.length
  }

  return (
    <div className="columns large-12">
      {props.email}
      {postLength}
      {commentLength}
    </div>
  )
}

export default UserShowTile
