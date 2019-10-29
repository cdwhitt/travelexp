import React, { useState, useEffect } from 'react'
import { HideUntilLoaded } from 'react-animation'
import PostShowTile from './PostShowTile'
import PostCommentContainer from './PostCommentContainer'
import CommentForm from './CommentForm'

const PostShowContainer = (props) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
    comments: []
  })
  const [commentFields, setCommentFields] = useState({
    body: ""
  })
  const [errors, setErrors] = useState({})

  let postId = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/posts/${postId}`)
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
      setPost(body.post)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["body"]

    requiredFields.forEach(field => {
      if(commentFields[field] === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "can't be blank"
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleInputChange = event => {
    setCommentFields({
      ...commentFields,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (validForSubmission()) {
      addComment(commentFields)
      setCommentFields({
        body: ""
      })
    }
  }

  const addComment = (commentFields) => {
    fetch(`/api/v1/posts/${postId}/comments`, {
      credentials: "same-origin",
      method: 'POST',
      body: JSON.stringify(commentFields),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
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
      if (body.comment.id) {
        setComments([...comments, body.comment])
      } else {
        setErrors(body.errors)
        setCommentFields(body.fields)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  return (
    <div className="row show-post-tile">
      <HideUntilLoaded
        animationIn="fadeIn"
        >
        <PostShowTile
          title={post.title}
          body={post.body}
        />
        <CommentForm
          commentFields={commentFields}
          errors={errors}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
        <PostCommentContainer
          comments={post.comments}
        />
      </HideUntilLoaded>
    </div>
  )
}

export default PostShowContainer
