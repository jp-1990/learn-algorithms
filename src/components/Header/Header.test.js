import React from "react"
import renderer from "react-test-renderer"

import Header from "./Header"

// To update the snapshot to reflect valid changes run npm test -- -u
describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header siteTitle="Gatsby Default Starter" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
