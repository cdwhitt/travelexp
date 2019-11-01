import React from 'react'

const PostCommentContainer = (props) => {

  let commentsStatus = "No Comments Yet"

  if (props.comments.length > 0) {
    commentsStatus = "Comments"
  }


  const commentInfo = props.comments.map(comment => {
    return (
      <div
        key={comment.id}
        className="columns small-12 comment-tile">
        <p className="comment-user">{comment.user.email} said...</p>
        <p className="comment-text">{comment.body}</p>
        <p className="comment-date">On {comment.comment_date}</p>
      </div>
    )
  })

  return (
    <div className="row comments-container">
      <div className="columns small-12">
        <h3>{commentsStatus}</h3>
      </div>
        {commentInfo}
    </div>
  )
}

export default PostCommentContainer
