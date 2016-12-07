import React, {Component} from 'react'
import './App.css'
export default class Main extends Component {
  render () {
    return (
      <div>
        <Header />
        {this.props.children}
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
