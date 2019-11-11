import React, { useState } from "react"
import _ from "lodash"
import ErrorList from "../ErrorList"

const CommentForm = props => {
  return(
    <div className="columns small-12 comment-form">
      <h3>Your Comment Below</h3>

      <form onSubmit={props.handleSubmit} id="comment-form">
      <ErrorList
          errors={props.errors}
        />
        <p className="comment-user">Comment as {props.currentUser}</p>
        <label htmlFor="body">
          <textarea
            className="comment-body"
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
