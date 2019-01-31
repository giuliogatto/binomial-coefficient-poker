import { connect } from 'react-redux'
import { updateCard,update } from '../actions'
import UpdaterList from '../components/UpdaterList'


const mapStateToProps = state => ({
  cards: state.cards
})

const mapDispatchToProps = dispatch => ({
  update: card => dispatch(update(card)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdaterList)