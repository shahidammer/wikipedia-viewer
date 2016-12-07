import React, {Component} from 'react'
import './App.css'
import RandomSearch from './RandomSearch'
import { Link } from 'react-router'
export default class Main extends Component {
  render () {
    return (
      <div className='MainDiv'>
        <RandomSearch />
        <SearchButton />

       </div>
    )
  }
}

const SearchButton = () => {
  return (
    <div id='SearchDiv' >
      <Link id='SearchBtn' to='/List'>
        <span className='glyphicon glyphicon-search' aria-hidden='true'></span>
        <p> Click the Icon for any search </p>
      </Link>
   </div>
  )
}
