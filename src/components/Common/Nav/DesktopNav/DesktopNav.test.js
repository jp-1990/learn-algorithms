import React from "react"
import renderer from "react-test-renderer"

import DesktopNav from "./DesktopNav"

describe("<DesktopNav />", () => {
  const defaultProps = [
    { label: "Data Structures", link: "/dataStructures" },
    { label: "Algorithms", link: "/algorithms" },
    { label: "About", link: "/about" },
  ]

  const wrapper = renderer
    .create(<DesktopNav links={[...defaultProps]} />)
    .toJSON()

  test("render", () => {
    expect(wrapper).toMatchSnapshot()
  })
})
