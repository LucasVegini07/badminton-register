import axios from 'axios';

const realApi = axios.create({
  baseURL: process.env.REACT_APP_STRAPI_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const fakeApi = axios.create({
  baseURL: process.env.REACT_APP_FAKE_STRAPI_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// eslint-disable-next-line import/prefer-default-export
export { realApi, fakeApi };
