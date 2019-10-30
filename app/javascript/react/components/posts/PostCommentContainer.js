import React from 'react'
import { HideUntilLoaded } from 'react-animation'

const PostCommentContainer = (props) => {

  const commentInfo = props.comments.map(comment => {
    return (
        <div
          key={comment.id}
          className="columns small-12">
            {comment.body}
        </div>
    )
  })

  return (
      <div className="row">
        <div className="columns small-12">
          <h3>Comments</h3>
        </div>
          {commentInfo}
      </div>

  )
}

export default PostCommentContainer
