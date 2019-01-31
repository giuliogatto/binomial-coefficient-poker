export const updateCard = (options) => ({
  type: 'UPDATE_CARD',
  id: options.id,
  rank: options.rank,
  suit: options.suit
})