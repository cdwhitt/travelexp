import React, { useState, useEffect, useCallback } from 'react'
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import VotesTile from './VotesTile'

const PostShowTile = (props) => {
  const [votes, setVotes] = useState([])
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  useEffect(() => {
    fetch(`/api/v1/posts/${props.postId}/votes`)
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
      setVotes(body.votes)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const handleVoteClick = (voteInfo) => {
    fetch(`/api/v1/posts/${props.postId}/votes`, {
      credentials: "same-origin",
      method: 'POST',
      body: JSON.stringify(voteInfo),
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
      setVotes(body.votes)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  const photos = [
  {
    src: `${props.photo}`,
    width: 4,
    height: 3
  }
];


  return (
    <>
      <div className="columns small-12">
        <h1 className="post-title">{props.title}</h1>
        <p className="post-author">
          By: <a href={`/users/${props.userId}`}>{props.author}</a>
        </p>
        <p className="post-body">{props.body}</p>

          <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>

      </div>
      <div className="columns small-12">
        <VotesTile
          handleVoteClick={handleVoteClick}
          votes={votes}
        />
      </div>
    </>
  )
}

export default PostShowTile
