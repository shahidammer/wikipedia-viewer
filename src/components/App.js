import React, {Component} from 'react'
import './App.css'
import RandomSearch from './RandomSearch'
// import List from './List'
import ListContainer from '../Container/ListContainer'

import FormInputContainer from '../Container/FormInputContainer'
export default class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <RandomSearch />
        <FormInputContainer />
        <ListContainer />
      </div>
    )
  }
}

const Header = function () {
  return (
    <div id='header'>
      <h1>Wikipedia Viewer</h1>
    </div>
  )
}
