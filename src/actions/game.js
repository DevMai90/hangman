import {
  GAME_OVER,
  UPDATE_WIN,
  UPDATE_LOSE,
  RESET_GAME_STATUS,
  RESET_GAME_HISTORY
} from './types';

export const gameOver = status => dispatch => {
  dispatch({
    type: GAME_OVER,
    payload: status
  });

  if (status === 'win') {
    dispatch({
      type: UPDATE_WIN
    });
  } else if (status === 'lose') {
    dispatch({
      type: UPDATE_LOSE
    });
  }
};

export const resetGameStatus = () => dispatch => {
  dispatch({
    type: RESET_GAME_STATUS
  });
};

export const resetGameHistory = () => dispatch => {
  dispatch({
    type: RESET_GAME_HISTORY
  });
};
