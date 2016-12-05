import React from 'react'
const FormInput = (props) => {
  let input
  return (
    <div id='InputForm'>
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
    </div>
  )
}
export default FormInput
// props.onClick(input)
