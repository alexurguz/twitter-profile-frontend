import axios from 'axios';

export const get = async (url, params) => {
  const headers = {
    'Content-Type': 'application/json'
  };
  const result = await axios.get(url, params, {headers});
  return result.data;
};

export const post = async (url, params) => {
  const result = await axios.post(url, params);
  return result.data;
};
