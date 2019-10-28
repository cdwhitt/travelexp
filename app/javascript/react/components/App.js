import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import PostsIndexContainer from "./posts/PostsIndexContainer"
import PostForm from "./posts/PostForm"
import PostShowContainer from "./posts/PostShowContainer"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PostsIndexContainer} />
        <Route exact path="/posts/new" component={PostForm} />
        <Route exact path="/posts/:id" component={PostShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
