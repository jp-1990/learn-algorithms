import React from "react"
import renderer from "react-test-renderer"

import ContentWrapper from "./ContentWrapper"

describe("<ContentWrapper />", () => {
  const defaultProps = <div>Children</div>
  const wrapper = renderer.create(<ContentWrapper children={defaultProps} />)

  test("render", () => {
    expect(wrapper).toMatchSnapshot()
  })
})
