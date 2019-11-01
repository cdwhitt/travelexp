import React from 'react'

const VotesTile = (props) => {
  let upVoteCount = 0
  let downVoteCount = 0

  if (props.votes.length > 0) {
    props.votes.forEach(vote => {
      upVoteCount += vote.up
      downVoteCount += vote.down
    })
  }

  const handleClick = event => {
    event.preventDefault()
    props.handleVoteClick(event.currentTarget.id)
  }

  return (
    <div className="row">
      <div className="columns small-12 votes-tile">
        <form>
          <button className="fas fa-arrow-circle-up" id="up" onClick={handleClick} title="Upvote this post"></button>
          <span className="vote-number-green" id="up-span">{upVoteCount}</span>
          <button className="fas fa-arrow-circle-down" id="down" onClick={handleClick} title="Downvote this post"></button>
          <span className="vote-number-red" id="down-span">{downVoteCount}</span>
        </form>
      </div>
    </div>
  )
}

export default VotesTile
