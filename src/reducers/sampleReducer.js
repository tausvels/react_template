const sampleReducer = (state=0, action) => {
  switch(action.type) {
    case 'INCREMENT': 
      return state + 1;
    case 'SAMPLE':
      return state + 10;
    default:
      return state
  }
}

export default sampleReducer;