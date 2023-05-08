const axios = require('axios').default;

const MATCHES_SERVICE_URL = 'http://localhost:3000/';

const matchesApi = axios.create({
  baseURL: MATCHES_SERVICE_URL
});

exports.matchesApi = matchesApi;
