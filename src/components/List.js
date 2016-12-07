import React, { PropTypes } from 'react'
import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'

import ListItems from './ListItems'

const List = (props) => {
  console.log(props)
  if (props.isFetching === true) {
    return (
      <div id= 'LoadingBar'>
        <Loading show={props.isFetching} color='white'/>
        <p>Loading....</p>
      </div>
  )
  } else {
    if (props.isTitleSearchable === false) {
      return <div className='alert alert-danger' role='alert'>
        Unable to retrieve your search
      </div>
      // window.alert('Unable to Search it')
    }
    return (
      <div >
        <Loading show={props.isFetching} color='white'/>
        { props.items.map((item) => {
          return <div id='list' key = {item.index}>
            <ListItems title={item.title} description={item.extract}/>
          </div>
        })}
      </div>
    )
  }
  List.propTypes = {
    items: PropTypes.array.isRequired,
    isFetching: PropTypes.boolean.isRequired,
    isTitleSearchable: PropTypes.boolean.isRequired
  }
}
export default List
