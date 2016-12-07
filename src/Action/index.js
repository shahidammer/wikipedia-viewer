import axios from 'axios'

export const DATA_FETCHED = 'DATA_FETCHED'
export const DATA_FECTCHING = 'DATA_FECTCHING'
export const DATA_FETCH_ERROR = 'DATA_FETCH_ERROR'

const URL = 'http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages%7Cextracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&origin=*&gsrsearch='

export const invalidQuery = (err) => ({
  type: DATA_FETCH_ERROR,
  payload: err
})
export const requestQuery = () => ({
  type: DATA_FECTCHING
})
export const dataRecieved = (response, keys) => ({
  type: DATA_FETCHED,
  payload: keys.map((key) => { return response[key] })
})
export const fetchLinks = (searchTitle) => {
  return function (dispatch) {
    dispatch(requestQuery())
    axios.get(URL + searchTitle)
    .then(function (response) {
      let keys = Object.keys(response.data.query.pages)
      dispatch(dataRecieved(response.data.query.pages, keys))
    })
    .catch(function (error) {
      dispatch(invalidQuery(error))
    })
  }
}
