import axios from 'axios';

const getDataFromApi = () => {
  return axios.get('/phones').then((response) => {
    return response.data;
  });
};

export default getDataFromApi;
