import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Titlebox from "../components/Common/Titlebox/Titlebox.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Titlebox title="merge sort" type="algorithm" />
  </Layout>
)

export default IndexPage
