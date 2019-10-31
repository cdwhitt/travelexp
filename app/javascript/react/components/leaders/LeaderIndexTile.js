import React from 'react'
import { HideUntilLoaded } from 'react-animation'

const LeaderIndexTile = (props) => {

  let statusSymbol = <span className="basic-user">Basic User</span>

  if (props.score >= 50) {
    statusSymbol = <i className="fas fa-medal gold"></i>
  }
  if (props.score >= 30 && props.score < 50) {
    statusSymbol = <i className="fas fa-medal silver"></i>
  }
  if (props.score >= 10 && props.score < 30) {
    statusSymbol = <i className="fas fa-medal bronze"></i>
  }

  return (
    <div className="columns small-12 leader-tile">
      <div className="row">
        <div className="columns large-6 text-center left-side">
          <h1 className="ranked-user">{props.email}</h1>
          <h2>Rank</h2>
            <h4>{statusSymbol}</h4>
        </div>
        <div className="columns large-6 right-side">
          <h1 className="text-center user-stats-header">Stats</h1>
          <h3>Number of posts:</h3>
            <p className="stat-numbers">{props.posts.length}</p>
          <h3>Number of comments:</h3>
            <p className="stat-numbers">{props.comments.length}</p>
          <h3>Score:</h3>
            <p className="stat-numbers">{props.score}</p>
        </div>
      </div>
    </div>
  )
}

export default LeaderIndexTile
