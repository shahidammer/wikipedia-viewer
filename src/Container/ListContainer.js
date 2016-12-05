import { connect } from 'react-redux'
import List from '../components/List'

const mapStateToProps = (state) => ({
  items: state.data,
  isFetching: state.isFetching,
  isTitleSearchable: state.isTitleSearchable
})

const ListContainer = connect(
  mapStateToProps
)(List)

export default ListContainer
