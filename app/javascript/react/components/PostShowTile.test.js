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
          author="cwhitt91@gmail.com"
          body="Let me tell you about a time I traveled there..."
        />
      </BrowserRouter>
    )
  })

  it("renders an h1 tag with the title of the post", () => {
    expect(wrapper.find(".post-title").text()).toBe("I love New Zealand!")
  })

  it("renders a p tag with the email of the author", () => {
    expect(wrapper.find(".post-author").text()).toBe("By: cwhitt91@gmail.com")
  })

  it("renders a p tag with the body of the post", () => {
    expect(wrapper.find(".post-body").text()).toBe("Let me tell you about a time I traveled there...")
  })

})
