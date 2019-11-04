import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import _ from "lodash"
import ErrorList from "../ErrorList"
import Dropzone from 'react-dropzone'

const PostForm = props => {
  const [postFields, setPostFields] = useState({
    title: "",
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

    const requiredFields = ["title", "body"]

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

     fetch('/api/v1/posts.json', {
     credentials: "same-origin",
     method: 'POST',
     body: JSON.stringify(postFields),
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
       body: "",
     })
   }

    // event.preventDefault()
    // if (validForSubmission()) {
    //   let submittedFields = new FormData()
    //     submittedFields.append("title", postFields.title)
    //     submittedFields.append("body", postFields.body)
    //     submittedFields.append("photos", photosUpload[0])
    //   fetch('/api/v1/posts.json', {
    //   credentials: "same-origin",
    //   method: 'POST',
    //   body: submittedFields
    // })
    // .then(response => {
    //   if (response.ok) {
    //     return response;
    //   } else {
    //     let errorMessage = `${response.status} (${response.statusText})`,
    //      error = new Error(errorMessage);
    //     throw(error);
    //   }
    // })
    // .then(response => response.json())
    // .then(body => {
    //   if (body.post.id) {
    //     setRedirectNumber(body.post.id)
    //   } else {
    //     setErrors(body.errors)
    //     setPostFields(body.fields)
    //   }
    // })
    // .catch(error => console.error(`Error in fetch: ${error.message}`));
    //
    //   setPostFields({
    //     title: "",
    //     body: "",
    //     photos: {}
    //   })
    // }
  }

  if (redirectNumber) {
    return <Redirect to={`/posts/${redirectNumber}`} />
  }
  //
  // const onDrop = (file) => {
  //   if(file.length <= 10) {
  //     setPhotosUpload(file)
  //   } else {
  //     setMessage("You can only upload up to 10 photos")
  //   }
  // }

  return(
    <div>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
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

        <label htmlFor="body">Body:
          <textarea
            type="text"
            id="body"
            value={postFields.body}
            onChange={handleInputChange}
          />
        </label>



        <input className="input-button" type="submit" value="Add Post" />
      </form>
    </div>
  )
}

export default PostForm
//
//
// <section>
//   <div className="dropzone">
//     <Dropzone
//       className=""
//       multiple={true}
//       onDrop={file => onDrop(file)}>
//       {({getRootProps, getInputProps}) => (
//
//           <div {...getRootProps()}>
//             <input {...getInputProps()} />
//             <p>Drag 'n' drop some files here, or click to select files</p>
//           </div>
//
//       )}
//     </Dropzone>
//   </div>
//   <aside>
//     <ul>
//       {
//         photosUpload.map(file => <li key={file.name}>{file.name} - {file.size} bytes</li>)
//       }
//     </ul>
//   </aside>
// </section>
//
