import { connect } from 'react-redux'
import { updateCard } from '../actions'
import CardList from '../components/CardList'


const mapStateToProps = state => ({
  cards: state.cards
})

const mapDispatchToProps = dispatch => ({
  updateCard: card => dispatch(updateCard(card)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)