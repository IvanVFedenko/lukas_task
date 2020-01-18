import * as a_t from '../constants/action_types';
import * as get from '../api/get_countries';

export const set_countries = (value) => ({ type: a_t.SET_COUNTRIES, value });

export const set_countries_thunk = () => async (dispatch) => {
  const countries = await get.get_from_server();
  dispatch(set_countries(countries));
};
