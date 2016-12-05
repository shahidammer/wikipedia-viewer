import { connect } from 'react-redux'
import { fetchLinks } from '../Action'
import FormInput from '../components/FormInput'
const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (ownProps) => {
    dispatch(fetchLinks(ownProps))
  }
})

const FormInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormInput)

export default FormInputContainer
