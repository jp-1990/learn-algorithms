import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import styles from "./DesktopNav.module.scss"

const DesktopNav = ({ links }) => {
  // return jsx for given links
  const linkArray = links.map((e, i) => {
    return (
      <Link key={i} to={e.link}>
        {e.label}
      </Link>
    )
  })
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.links}>{linkArray}</div>
    </nav>
  )
}

DesktopNav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
}

export default DesktopNav
