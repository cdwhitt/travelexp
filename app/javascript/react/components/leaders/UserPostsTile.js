import React from 'react'

const UserPostsTile = (props) => {

  return (
    <div>
      <li><a href={`/posts/${props.id}`}>{props.title}</a></li>
    </div>
  )
}

export default UserPostsTile
