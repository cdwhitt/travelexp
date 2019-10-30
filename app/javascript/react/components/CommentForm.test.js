import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import CommentForm from "./posts/CommentForm"
import ErrorList from "./ErrorList"

describe("CommentForm", () => {
  let wrapper, onSubmitMock, onChangeMock

  let commentFields = {
    body: "This animal is the most adorable"
  }

  let errors = ["Body can't be blank"]

  beforeEach(() => {
    onSubmitMock = jest.fn()
    onChangeMock = jest.fn()
    wrapper = mount(
      <BrowserRouter>
        <CommentForm
          commentFields={commentFields}
          errors={errors}
          handleSubmit={onSubmitMock}
          handleInputChange={onChangeMock}
        />
      </BrowserRouter>
    )
  })

  it('should render an Error component', () => {
    expect(wrapper.find(ErrorList).props().errors[0]).toBe("Body can't be blank")
  })

  it('should invoke the submit function from props when clicked', () => {
    let form = wrapper.find("#comment-form")
    form.simulate("submit")
    expect(onSubmitMock).toHaveBeenCalled()
  })

  it('should invoke the change function from props when body has changed', () => {
    let body = wrapper.find("#body")
    body.simulate("change")
    expect(onChangeMock).toHaveBeenCalled()
  })

  it('should print the body in the input field', () => {
    expect(wrapper.find("#body").props().value).toBe("This animal is the most adorable")
  })
})
