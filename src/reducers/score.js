import * as actionType from '../const/actionType';

const init_state = {
  lastScore: 0,
  bestScore: 0,
  addScoreAnimation: 0
};
/* eslint-disable no-case-declarations */
const score = (state = init_state, action) => {
  switch (action.type) {
    case actionType.ADDLASTSCORE:
      let number = { ...state };
      const newlastScore = action.data;
      const addScoreAnimation = action.data;
      let lastScore = number.lastScore + newlastScore;
      return Object.assign({}, state, { lastScore, addScoreAnimation });
    case actionType.ADDBESTSCORE:
      const bestScore = action.data;
      return Object.assign({}, state, { bestScore });
    case actionType.INITLASTSCORE:
      number = { ...state };
      lastScore = number.lastScore * 0;
      return Object.assign({}, state, { lastScore });
    default:
      return state;
  }
};

export default score;
