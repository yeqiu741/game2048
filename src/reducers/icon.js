const iconUp = require('../img/up.png');
const iconDown = require('../img/down.png');
const iconLeft = require('../img/left.png');
const iconRight = require('../img/right.png');

/* eslint-disable no-unused-vars */
const init_list = {
  icon: {
    icon_up: iconUp,
    icon_down: iconDown,
    icon_left: iconLeft,
    icon_right: iconRight
  }
};

const icon = (state = init_list, action) => state;

export default icon;
