import * as actionType from '../const/actionType';


export function restart(data) {
  return {
    type: actionType.RESTART,
    data
  };
}
export function oneRandNumber(data) {
  return {
    type: actionType.ONERANDNUMBER,
    data
  };
}

export function moveLeft(data) {
  return {
    type: actionType.MOVELEFT,
    data
  };
}
export function moveRight(data) {
  return {
    type: actionType.MOVERIGHT,
    data
  };
}
export function moveUp(data) {
  return {
    type: actionType.MOVEUP,
    data
  };
}
export function moveDown(data) {
  return {
    type: actionType.MOVEDOWN,
    data
  };
}
export function addLastScore(data) {
  return {
    type: actionType.ADDLASTSCORE,
    data
  };
}
export function addBestScore(data) {
  return {
    type: actionType.ADDBESTSCORE,
    data
  };
}
export function initLastScore(data) {
  return {
    type: actionType.INITLASTSCORE,
    data
  };
}

