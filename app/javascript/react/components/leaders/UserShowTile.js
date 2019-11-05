import React from 'react'
import UserPostsTile from './UserPostsTile'

const UserShowTile = (props) => {

  let userPostsList
  let postsLength = props.posts.length
  let commentsLength = props.comments.length
  let score = props.score

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

  let statusSymbol = <span className="basic-user">n00b</span>

  if (score >= 50) {
    statusSymbol = <h1><i className="fas fa-medal gold"></i></h1>
  }
  if (score >= 30 && props.score < 50) {
    statusSymbol = <h1><i className="fas fa-medal silver"></i></h1>
  }
  if (score >= 10 && props.score < 30) {
    statusSymbol = <h1><i className="fas fa-medal bronze"></i></h1>
  }

  return (
    <div className="columns large-12 show-user-tile">
      <div className="row">
        <div className="columns small-12 medium-4 large-4 stats-column">
          <h5 className="text-center user-profile-email">{props.email}</h5>
          <div className="row profile-image-container">
            <img className="profile-image" src={props.profilePhoto}/>
          </div>
          <div id="stats-container">
            <h5 className="text-center stats-header">Rank</h5>
              <p className="text-center">{statusSymbol}</p>
            <h5 className="text-center stats-header">Stats</h5>
              <p className="text-center">Score: <span className="stat-numbers">{score}</span></p>
              <p className="text-center">Posts: <span className="stat-numbers">{postsLength}</span></p>
              <p className="text-center">Comments: <span className="stat-numbers">{commentsLength}</span></p>
          </div>
        </div>

        <div className="columns small-12 medium-4 large-4 entries-column">
          <h2 className="text-center entries-header">My Entries:</h2>
          <ol>
            {userPostsList}
          </ol>
        </div>
        <div className="columns small-12 medium-4 large-4 neat-photo-column">
        </div>
      </div>
    </div>
  )
}

export default UserShowTile
