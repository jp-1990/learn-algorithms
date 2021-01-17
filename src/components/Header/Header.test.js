import React from "react"
import { render } from "@testing-library/react"
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
  it("has expected title", () => {
    // gets id from data id set on component
    const { getByTestId } = render(
      <Header siteTitle="Gatsby Default Starter" />
    )
    // assertion
    expect(getByTestId("header-title")).toHaveTextContent(
      "Gatsby Default Starter"
    )
  })
})
