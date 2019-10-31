import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import LeaderIndexTile from "./leaders/LeaderIndexTile"

describe("LeaderTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <LeaderIndexTile
          email="charlie@charlie.charlie"
          posts= "5"
          comments= "6"
          score= "20"
        />
      </BrowserRouter>
    )
  })

  it("renders an h1 tag with the leader name", () => {
    expect(wrapper.find(".ranked-user").text()).toBe("charlie@charlie.charlie")
  })

})
