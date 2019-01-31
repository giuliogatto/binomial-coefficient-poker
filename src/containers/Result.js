import { connect } from 'react-redux'
import { updateCard } from '../actions'
import Result from '../components/Result'


const mapStateToProps = state => ({
  result: state.result
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result)