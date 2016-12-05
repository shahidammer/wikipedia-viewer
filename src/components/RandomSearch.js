import React from 'react'

const RandomSearch = function (props) {
  const url = 'https://en.wikipedia.org/wiki/Special:Random'
  return (
    <div id='randomButton'>
      <a href={url} target='_blank'> Click here for a random article </a>
    </div>
  )
}

export default RandomSearch
