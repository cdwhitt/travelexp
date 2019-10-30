import React from 'react'

const PostCommentContainer = (props) => {

  const commentInfo = props.comments.map(comment => {
    return (
      <div
        key={comment.id}
        className="columns small-12 comment-tile">
        {comment.user.email} said...
        <p className="comment-text">
          {comment.body}
        </p>
        <p>
          On {comment.comment_date}
        </p>
      </div>
    )
  })

  return (
    <div className="row comments-container">
      <div className="columns small-12">
        <h3>Comments</h3>
      </div>
        {commentInfo}
    </div>
  )
}

export default PostCommentContainer
