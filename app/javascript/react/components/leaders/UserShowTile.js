import React from 'react'
import UserPostsTile from './UserPostsTile'

const UserShowTile = (props) => {

  let userPostsList

  if (props.posts) {
    userPostsList = props.posts.map(post => {
      return (
        <UserPostsTile
          key={post.id}
          id={post.id}
          title={post.title}
        />
      )
    })
  }


  return (
    <div className="columns large-12 show-user-tile">
      <h1>{props.email}</h1>
      <img className="profile-image" src={props.profilePhoto}/>

        {userPostsList}
    </div>
  )
}

export default UserShowTile
