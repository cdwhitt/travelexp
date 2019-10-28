import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import PostIndexTile from "./posts/PostIndexTile"

describe("PostTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <PostIndexTile
          title="I love Canada"
          body="It is one of the best countries to visit."
        />
      </BrowserRouter>
    )
  })

  it("renders an h2 tag with the post name", () => {
    expect(wrapper.find("h2").text()).toBe("I love Canada")
  })

})
