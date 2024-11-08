import axios from 'axios';
const baseUrl = '/api/notes';

let token = null;

const setToken = newToken => {
  token = `Bearer ${newToken}`;
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
  // const nonExisting = {
  //   id: 10000,
  //   content: 'This note is not saved to server',
  //   important: true,
  // };
  // return request.then(response => response.data.concat(nonExisting));
};

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const del = id => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then(respone => respone.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then(respone => respone.data);
};

export default {
  getAll,
  create,
  update,
  del,
  setToken,
};
