import React, { useEffect, useState } from 'react'
import { HideUntilLoaded } from 'react-animation'

import LeaderIndexTile from './LeaderIndexTile'

const LeadersIndexContainer = (props) => {
  const [leaders, setLeaders] = useState([])

  useEffect(() => {
    fetch('/api/v1/users')
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
      setLeaders(body.users)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const leaderTiles = leaders.map(leader => {

    return (
      <LeaderIndexTile
        key={leader.id}
        id={leader.id}
        email={leader.email}
        posts={leader.posts}
        comments={leader.comments}
        score={leader.score}
      />
    )
  })

  return (
    <div className="row leader-tile-container">
      <div className="columns small-12">
        <h1 className="leaders-title text-center">TRAVELexperts</h1>
      </div>
      {leaderTiles}
    </div>
  )
}

export default LeadersIndexContainer
