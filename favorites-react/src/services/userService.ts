import axios from 'axios';

const baseUrl = 'http://localhost:3000/api';

const getAllUsers = async () => {
  const response = await axios.get(`${baseUrl}/users`);
  return response.data;
};

const createUser = async (newUser) => {
  const response = await axios.post(`${baseUrl}/users`, newUser);
  return response.data;
};

export default { getAllUsers, createUser };
