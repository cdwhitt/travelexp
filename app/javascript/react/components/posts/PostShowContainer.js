import React, { useState, useEffect } from 'react'
import { HideUntilLoaded } from 'react-animation'
import PostShowTile from './PostShowTile'
import PostCommentContainer from './PostCommentContainer'
import CommentForm from './CommentForm'

const PostShowContainer = (props) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
    current_user: {
      email: ""
    }
  })
  const [author, setAuthor] = useState("")
  const [comments, setComments] = useState([])
  const [commentFields, setCommentFields] = useState({
    body: ""
  })
  const [errors, setErrors] = useState({})
  const [loggedInStatus, setLoggedInStatus] = useState(false)
  const [cssDisplay, setCssDisplay] = useState("hide-comment-form")

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
      setComments(body.post.comments)
      setAuthor(body.post.user.email)
      setPost(body.post)
      setLoggedInStatus(body.post.logged_in)
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
        setErrors({})
      } else {
        setErrors(body)
        setCommentFields(body.fields)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  const showCommentForm = (event) => {
    if (loggedInStatus) {
      if (cssDisplay === "hide-comment-form") {
        setCssDisplay("display-comment-form")
      } else {
        setCssDisplay("hide-comment-form")
      }
    } else {
      location.replace("/users/sign_in")
    }
  }

  let currentUser = ""
  if (loggedInStatus === true) {
    currentUser = post.current_user.email
  }

  return (
    <div className="row show-post-tile">
      <HideUntilLoaded
        animationIn="fadeIn"
        >
        <PostShowTile
          postId={postId}
          title={post.title}
          body={post.body}
          author={author}
        />
      <div className="comment-button">
        <button type="button" onClick={showCommentForm}>
          Comment
        </button>
        
        <button type="button" onClick={showCommentForm}>
          Share
        </button>
      </div>
        <div className={`${cssDisplay}`}>
          <CommentForm
            commentFields={commentFields}
            errors={errors}
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            currentUser={currentUser}
          />
        </div>
        <PostCommentContainer
          comments={comments}
        />
      </HideUntilLoaded>
    </div>
  )
}

export default PostShowContainer
