import axios from 'axios';
import { BASE_URL } from '../constants/api_constants';

export const get_from_server = async () => {
  const responce = await axios.get(BASE_URL);
  const countries = responce.data;
  return countries;
};
