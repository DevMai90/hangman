import { GAME_OVER } from './types';

export const gameOver = status => dispatch => {
  // if (status) {
  dispatch({
    type: GAME_OVER,
    payload: status
  });
  // }
};
