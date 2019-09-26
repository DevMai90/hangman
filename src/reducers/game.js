import { GAME_OVER } from '../actions/types';

const initialState = {
  difficulty: 6,
  winCount: 0,
  loseCount: 0,
  status: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GAME_OVER:
      return {
        ...state,
        status: payload
      };
    default:
      return state;
  }
}
