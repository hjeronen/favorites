import axios from 'axios';
import { Hello } from '../types';

const baseUrl = 'http://localhost:3000/api';

const getHello = async (): Promise<Hello> => {
  const response = await axios.get(`${baseUrl}/hello`);
  return response.data as Promise<Hello>;
};

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/things`);
  return response.data;
};

const createThing = async (newThing) => {
  const response = await axios.post(`${baseUrl}/things`, newThing);
  return response.data;
};

export default { getHello, getAll, createThing };
