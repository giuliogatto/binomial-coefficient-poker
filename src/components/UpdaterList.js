import React from 'react'
import PropTypes from 'prop-types'
import CardUpdater from './CardUpdater'

const UpdaterList = ({ cards,updateCard,update }) => (
  <div class='row'>
    {cards.map(card => (
      <CardUpdater key={card.id} {...card} 
        id = {card.id}
        suit={card.suit}
        rank={card.rank}
        update={(data) => update(data)}
      />
    ))}
  </div>
)

UpdaterList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      suit: PropTypes.string.isRequired,
      rank: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
}

export default UpdaterList