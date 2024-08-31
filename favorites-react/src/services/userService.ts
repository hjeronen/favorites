import axios from 'axios';
import { User } from '../types';

const baseUrl = 'http://localhost:3000/api';

const getAllUsers = async () => {
  const response = await axios.get(`${baseUrl}/users`);
  return response.data;
};

const createUser = async (newUser: User) => {
  const response = await axios.post(`${baseUrl}/users`, newUser);
  return response.data;
};

const deleteUser = async (userId: number) => {
  const response = await axios.delete(`${baseUrl}/users/${userId}`);
  return response.data;
};

export default { getAllUsers, createUser, deleteUser };
