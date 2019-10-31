import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import PostsIndexContainer from "./posts/PostsIndexContainer"
import PostForm from "./posts/PostForm"
import PostShowContainer from "./posts/PostShowContainer"

import LeadersIndexContainer from "./leaders/LeadersIndexContainer"
import UserShowContainer from "./leaders/UserShowContainer"



export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PostsIndexContainer} />
        <Route exact path="/posts/new" component={PostForm} />
        <Route exact path="/posts/:id" component={PostShowContainer} />
        <Route exact path="/leaders" component={LeadersIndexContainer} />
        <Route exact path="/users/:id" component={UserShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
