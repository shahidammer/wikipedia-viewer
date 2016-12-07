import React from 'react'
import { Link } from 'react-router'

const FormInput = (props) => {
  let input
  return (
    <div id='InputForm'>
      <Link to='/List'>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        props.onClick(input.value)
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
      </form>
      </Link>
    </div>
  )
}
export default FormInput
// props.onClick(input)
