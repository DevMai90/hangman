import {
  GAME_OVER,
  UPDATE_WIN,
  UPDATE_LOSE,
  RESET_GAME_STATUS,
  RESET_ENTIRE_STATUS
} from './types';

export const gameOver = status => dispatch => {
  dispatch({
    type: GAME_OVER,
    payload: status
  });
};

export const setWinLose = status => dispatch => {
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

export const resetEntireStatus = () => dispatch => {
  dispatch({
    type: RESET_ENTIRE_STATUS
  });
};
