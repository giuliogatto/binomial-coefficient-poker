import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import Card from './Card'

const CardList = ({ cards }) => (
  <div class='row'>
    {cards.map(card => (
      <Card key={card.id} {...card} 
        id = {card.id}
        suit={card.suit}
        rank={card.rank}
      />
    ))}
  </div>
)

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      suit: PropTypes.string.isRequired,
      rank: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
}

export default CardList