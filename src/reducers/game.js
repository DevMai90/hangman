const initialState = {
  difficulty: 6,
  winCount: 0,
  loseCount: 0,
  status: null
};

export default function(state = initialState, action) {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
}
