import React, { PropTypes } from 'react'
const ListItems = (props) => {
  const urlTitle = 'https://en.wikipedia.org/wiki/' + props.title
  return (
    <div id='listItems' >
      <a className='action_link' href= {urlTitle} target= '_blank'>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </a>
    </div>
  )
}
ListItems.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
export default ListItems
