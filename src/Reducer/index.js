const defaults = {
  isFetching: false,
  isTitleSearchable: true,
  data: []
}
const reducer = (state = defaults, action) => {
  switch (action.type) {
    case 'DATA_FECTCHING':
      return Object.assign({}, state, {
        isFetching: true,
        isTitleSearchable: true
      })
    case 'DATA_FETCHED':
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload
      })
    case 'DATA_FETCH_ERROR':
      return Object.assign({}, state, {
        isFetching: false,
        isTitleSearchable: false,
        data: []
      })
    default:
      return state
  }
}

export default reducer
