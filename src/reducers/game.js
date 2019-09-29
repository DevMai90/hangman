import {
  GAME_OVER,
  UPDATE_WIN,
  UPDATE_LOSE,
  RESET_GAME_STATUS,
  RESET_GAME_HISTORY
} from '../actions/types';

/*
- Status will change to win or lose depending on outcome of the game. 
- Status change will affect ending game prompt, disabling keypad, and reveal correct word
*/

const initialState = {
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
    case UPDATE_WIN:
      return {
        ...state,
        winCount: state.winCount + 1
      };
    case UPDATE_LOSE:
      return {
        ...state,
        loseCount: state.loseCount + 1
      };
    case RESET_GAME_STATUS:
      return {
        ...state,
        status: null
      };
    case RESET_GAME_HISTORY:
      return initialState;
    default:
      return state;
  }
}
