export const SET_RULE = 'SET_RULE';

export const ACTION_SET_RULE = (payload) => ({
  type: SET_RULE,
  payload,
});

export const DELETE_RULE = 'DELETE_RULE';
export const ACTION_DELETE_RULE = (payload) => ({
  type: DELETE_RULE,
  payload,
});

export const INPUT_ON = 'INPUT_ON';
export const INPUT_OFF = 'INPUT_OFF';

export const ACTION_INPUT_ON = () => ({
  type: INPUT_ON,
});

export const ACTION_INPUT_OFF = () => ({
  type: INPUT_OFF,
});
