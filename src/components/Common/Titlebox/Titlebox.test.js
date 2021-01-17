import React from "react"
import renderer from "react-test-renderer"
import { render } from "@testing-library/react"

import Titlebox from "./Titlebox"

describe("<Titlebox />", () => {
  const defaultProps = { title: "hello", type: "world" }
  const wrapper = renderer.create(<Titlebox {...defaultProps} />)

  test("render", () => {
    expect(wrapper).toMatchSnapshot()
  })
  test("title", () => {
    const { getByTestId } = render(<Titlebox {...defaultProps} />)
    expect(getByTestId("title")).toHaveTextContent(`${defaultProps.title}`)
  })
  test("type", () => {
    const { getByTestId } = render(<Titlebox {...defaultProps} />)
    expect(getByTestId("type")).toHaveTextContent(`${defaultProps.type}`)
  })
})
