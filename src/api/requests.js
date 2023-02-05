import axios from "axios";
import { BASE_URL } from './../constants/constants';

export const getAllBinsIdsRequest = (apiKey) => {
  return axios.get(`${BASE_URL}bins`, {headers: {
    "Api-key": apiKey
  }});
};

export const getBinRequest = (id, securityKey = undefined) => {
  if (securityKey) {
    return axios.get(`${BASE_URL}bin/${id}`, {headers: {
      "Security-key": securityKey
    }});
  }
  return axios.get(`${BASE_URL}bin/${id}`);
};

export const createNewBinRequest = (payload, apiKey, securityKey = undefined) => {
  if (securityKey) {
    return axios.post(`${BASE_URL}bin`, payload, {headers: {
      "Api-key": apiKey,
      "Security-key": securityKey,
      "Private": "true"
    }});
  }
  return axios.post(`${BASE_URL}bin`, payload, {headers: {"Api-key": apiKey}});
};

export const deleteBinRequest = (id, securityKey = undefined) => {
  if (securityKey) {
    return axios.post(`${BASE_URL}bin/${id}`, {headers: {
      "Security-key": securityKey,
    }});
  }
  return axios.delete(`${BASE_URL}bin/${id}`);
};

export const updateBinRequest = (id, payload, securityKey = undefined) => {
  if (securityKey) {
    return axios.put(`${BASE_URL}bin/${id}`, payload, {headers: {
      "Security-key": securityKey,
    }});
  }
  return axios.put(`${BASE_URL}bin/${id}`, payload);
};

export const patchBinRequest = (id, payload, securityKey = undefined) => {
  if (securityKey) {
    return axios.patch(`${BASE_URL}bin/${id}`, payload, {headers: {
      "Security-key": securityKey,
    }});
  }
  return axios.patch(`${BASE_URL}bin/${id}`, payload);
};