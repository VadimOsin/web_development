import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
  method: 'get',
  timeout: 10000000

})

