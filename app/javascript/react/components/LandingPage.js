import React from 'react'

const LandingPage = (props) => {

  return (
    <div className="splash-page-container">
      <div className="splash-page-tile">
        <div className="columns large-12 text-center">
          <h1 className="welcome-header">TRAVELexp</h1>
          <div className="row">
            <div className="columns large-6">
              <img src="https://travelexpbucket.s3.amazonaws.com/travelexp/undraw_traveling_t8y2+(1).svg"/>
              <h2>Already a Member?</h2>
              <a id="sign-in" href="/users/sign_in?">Sign In</a>
            </div>
            <div className="columns large-6 right-splash">
              <img src="https://travelexpbucket.s3.amazonaws.com/travelexp/undraw_around_the_world_v9nu.svg"/>
              <h2>New to TRAVELexp?</h2>
              <a id="sign-up" href="/users/sign_up?">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
