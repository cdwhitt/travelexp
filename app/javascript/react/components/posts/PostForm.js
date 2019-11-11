import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import _ from "lodash"
import ErrorList from "../ErrorList"
import Dropzone from 'react-dropzone'

const PostForm = props => {
  const [postFields, setPostFields] = useState({
    title: "",
    location: "",
    body: "",
  })
  const [photosUpload, setPhotosUpload] = useState([])
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState({})
  const [redirectNumber, setRedirectNumber] = useState(null)

  const handleInputChange = event => {
    setPostFields({
      ...postFields,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}

    const requiredFields = ["title", "location", "body"]

    requiredFields.forEach(field => {
      if(postFields[field] === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "can't be blank"
        }
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmit = event => {

    event.preventDefault()
    if (validForSubmission()) {

      let submittedFields = new FormData()
        submittedFields.append("title", postFields.title)
        submittedFields.append("location", postFields.location)
        submittedFields.append("body", postFields.body)
        submittedFields.append("photos", photosUpload[0])
      fetch('/api/v1/posts.json', {
      credentials: "same-origin",
      method: 'POST',
      body: submittedFields
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
      if (body.post.id) {
        setRedirectNumber(body.post.id)
      } else {
        setErrors(body.errors)
        setPostFields(body.fields)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));

      setPostFields({
        title: "",
        location: "",
        body: "",
        photos: ""
      })
    }
  }

  if (redirectNumber) {
    return <Redirect to={`/posts/${redirectNumber}`} />
  }

  const onDrop = (file) => {
    if(file.length === 1) {
      setPhotosUpload(file)
    } else {
      setMessage("You can only upload one photo")
    }
  }

  return(
    <div className="row form-margin">
    <div className="post-form-container columns small-12">
      <form onSubmit={handleSubmit} className="post-form">
        <h2 className="text-center">New Journal Entry</h2>
        <ErrorList
          errors={errors}
        />
        <label htmlFor="title">Title:
          <input
            type="text"
            id="title"
            value={postFields.title}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="location">Location (enter a city, state, region, or country):
          <input
            type="text"
            id="location"
            value={postFields.location}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="body">Body:
          <textarea
            rows="10"
            cols="50"
            type="text"
            id="body"
            value={postFields.body}
            onChange={handleInputChange}
          />
        </label>

        <section>
          <div className="dropzone">
            <Dropzone
              className=""
              multiple={false}
              onDrop={file => onDrop(file)}
              accept='image/*'>
              {({getRootProps, getInputProps}) => (

                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p className="dropzone-box">
                      Upload a photo from your trip!
                      <br/>
                      (Drag n drop or click to upload)
                    </p>
                  </div>

              )}
            </Dropzone>
          </div>
          <aside>
            <ul>
              {
                photosUpload.map(file => <li key={file.name}>{file.name} - {file.size} bytes</li>)
              }
            </ul>
          </aside>
        </section>

        <input className="input-button" type="submit" value="Post" />
      </form>
    </div>
    </div>
  )
}

export default PostForm
