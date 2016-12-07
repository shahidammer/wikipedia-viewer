import { connect } from 'react-redux'
import List from '../components/List'

const mapStateToProps = (state) => ({
  items: state.reducer.data,
  isFetching: state.reducer.isFetching,
  isTitleSearchable: state.reducer.isTitleSearchable
})

const ListContainer = connect(
  mapStateToProps
)(List)

export default ListContainer
