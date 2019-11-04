import React from 'react'

const UserPostsTile = (props) => {

  return (
    <div>
      <ul>
        <li><a href={`/posts/${props.id}`}>{props.title}</a></li>
      </ul>
    </div>
  )
}

export default UserPostsTile
