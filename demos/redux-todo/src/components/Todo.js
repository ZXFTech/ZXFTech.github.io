import React from 'react'
import PropTypes from 'prop-types'

function Todo({ onClick, completed, text }) {

  return (
    <li onClick={onClick}
      style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text}
    </li>
  )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  complete: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
