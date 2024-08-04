import axios from 'axios';
import { Hello } from './types';

const baseUrl = 'http://localhost:3000/api';

const getHello = async (): Promise<Hello> => {
  const response = await axios.get(`${baseUrl}/hello`);
  return response.data as Promise<Hello>;
};

export default { getHello };
