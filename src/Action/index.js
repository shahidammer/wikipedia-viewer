import axios from 'axios'
const URL = 'http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages%7Cextracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&origin=*&gsrsearch='

export const fetchLinks = (searchTitle) => {
  return function (dispatch) {
    dispatch({
      type: 'DATA_FECTCHING'
    })
    axios.get(URL + searchTitle)
    .then(function (response) {
      let keys = Object.keys(response.data.query.pages)
      const tempArr = keys.map((key) => {
        return response.data.query.pages[key]
      })
      console.log(tempArr)
      dispatch({
        type: 'DATA_FETCHED',
        payload: tempArr
      })
    })
    .catch(function (error) {
      dispatch({
        type: 'DATA_FETCH_ERROR',
        payload: error
      })
    })
  }
}
