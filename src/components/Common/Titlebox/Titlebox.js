import React from "react"
import PropTypes from "prop-types"

import styles from "./Titlebox.module.scss"

const Titlebox = ({ title, type }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titlebox}>
        <h1 data-testid="title">{title}</h1>
      </div>
      <div className={styles.typebox}>
        <h4 data-testid="type">{type}</h4>
      </div>
    </div>
  )
}

Titlebox.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Titlebox
