import { SET_COUNTRIES } from '../constants/action_types';

const initial_state = {
  countries: []
};

export const countries_reducer = (state = initial_state, action) => {
  const actions = {
    [SET_COUNTRIES]: () => ({
      ...state,
      countries: action.value
    })
  };
  if (action.type in actions) {
    return actions[action.type](action);
  }
  return state;
};
