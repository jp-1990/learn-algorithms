/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import DesktopNav from "./Nav/DesktopNav/DesktopNav.js"

import "../styles/reset.scss"

const Layout = ({ children }) => {
  return (
    <>
      <DesktopNav
        links={[
          { label: "Data Structures", link: "/dataStructures" },
          { label: "Algorithms", link: "/algorithms" },
          { label: "About", link: "/about" },
        ]}
      />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
