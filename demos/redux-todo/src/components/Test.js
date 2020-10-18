import React from 'react'
import { createStore } from 'redux'
import { addTodo, ADD_TODO } from '../store/action'
import reducer from '../store/reducer'

const store = createStore(reducer)
function Test() {
  return (
    <div onClick={() => {
      store.dispatch({ type: ADD_TODO, text: 'test' })
      console.log('test')
    }}>
      test
    </div>
  )
}

export default Test
