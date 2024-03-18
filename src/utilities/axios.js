import Axios from "axios";

const API_SERVER_URL ="https://61791a83aa7f3400174047a6.mockapi.io/v1"

const prepareUrl = (api) => API_SERVER_URL + api;

const axios = {
  get: (api) => Axios.get(prepareUrl(api)),
  post: (api, formData = {}) =>
    Axios.post(prepareUrl(api), formData),
  patch: (api, formData = {}) =>
    Axios.patch(prepareUrl(api), formData),
  put: (api, formData = {}) =>
    Axios.put(prepareUrl(api), formData),
  delete: (api) => Axios.delete(prepareUrl(api)),
};

export default axios;
