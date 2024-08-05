import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tests';

export const getTests = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getTestById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createTest = async (test) => {
  const response = await axios.post(API_URL, test);
  return response.data;
};

export const updateTest = async (id, test) => {
  const response = await axios.put(`${API_URL}/${id}`, test);
  return response.data;
};

export const deleteTest = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
