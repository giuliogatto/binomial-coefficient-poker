const cards = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_CARD':
      // avoid duplicate cards
      let index = state.findIndex(el => el.rank == action.rank && el.suit == action.suit);
      if(index == -1){
        return state.map(
          card =>
            card.id === action.id ? { ...card, rank: action.rank, suit: action.suit } : card
        )
      }
      return state
      
    default:
      return state
  }
}

export default cards