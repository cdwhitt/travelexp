import React, { useEffect, useState } from 'react'
import UserShowTile from './UserShowTile'

const UserShowContainer = (props) => {
  const [user, setUser] = useState({})

  let userId = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/users/${userId}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      setUser(body.user)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  return (
    <div className="row">
      <UserShowTile
        comments={user.comments}
        posts={user.posts}
        email={user.email}
        score={user.score}
      />
    </div>
  )
}

export default UserShowContainer
