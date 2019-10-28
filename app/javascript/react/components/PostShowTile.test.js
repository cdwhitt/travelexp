import React from 'react'
import PostShowTile from "./posts/PostShowTile"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() })

describe("PostShowTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <PostShowTile
          title="I love New Zealand!"
          body="Let me tell you about a time I traveled there..."
        />
      </BrowserRouter>
    )
  })

  it("renders an h1 tag with the title of the post", () => {
    expect(wrapper.find("h1").text()).toBe("I love New Zealand!")
  })

  it("renders a p tag with the body of the post", () => {
    expect(wrapper.find("p").text()).toBe("Let me tell you about a time I traveled there...")
  })

})
