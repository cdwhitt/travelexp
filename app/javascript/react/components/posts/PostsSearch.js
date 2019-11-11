import React, { useState } from 'react'

const PostsSearch = (props) => {
  const [searchField, setSearchField] = useState("")

  const handleSearchInputChange = event => {
    setSearchField(event.target.value)
  }

  const handleSearchPayload = event => {
    props.handleSearchSubmit(searchField)
    clearForm()
  }

  const clearForm = event => {
    setSearchField("")
  }

  return (
    <div className="post-form-container search-form">
      <form onSubmit={handleSearchPayload}>
        <h2 className="title-form-headers text-center">Entries Search</h2>
        <label htmlFor="location">Planning a trip? Search for a location that's been detailed by one of our users:
          <input
            type="text"
            id="location"
            value={searchField}
            onChange={handleSearchInputChange}
          />
        </label>
        <input className="input-button" type="submit" value="Search" />
        <input className="clear-button" type="button" value="Clear" onClick={clearForm}/>
      </form>
    </div>
  )
}

export default PostsSearch
