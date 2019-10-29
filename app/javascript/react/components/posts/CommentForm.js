import React, { useState } from "react"
import _ from "lodash"
import ErrorList from "../ErrorList"

const CommentForm = props => {

  return(
    <div className="columns small-12">
      <h2>Add Comment</h2>
      <form onSubmit={props.handleSubmit} id="comment-form">
      <ErrorList
          errors={props.errors}
        />
        <label htmlFor="body">Body:
          <textarea
            type="text"
            id="body"
            value={props.commentFields.body}
            onChange={props.handleInputChange}
          />
        </label>

        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default CommentForm
