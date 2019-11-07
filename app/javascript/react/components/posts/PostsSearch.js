import React, { useState } from 'react'

const PostsSearch = (props) => {
  const [searchField, setSearchField] = useState("")

  const handleSearchInputChange = event => {
    setSearchField(event.target.value)
  }

  const handleSearchPayload = event => {
    props.handleSearchSubmit(searchField)
  }

  return (
    <div>
      <h1>Search Form</h1>

      <form onSubmit={handleSearchPayload}>
        <label htmlFor="location">Search post by location:
          <input
            type="text"
            id="location"
            value={searchField}
            onChange={handleSearchInputChange}
          />
        </label>
        <input className="input-button" type="submit" value="Search" />
      </form>
    </div>
  )
}

export default PostsSearch
