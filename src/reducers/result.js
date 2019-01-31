const result = (state = 1, action) => {
  
  switch (action.type) {
    case 'UPDATE_RESULT':
      return action.result
    default:
      return state
  }
}

export default result