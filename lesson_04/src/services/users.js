import axios from "axios";
const API = `https://6a05e129aa826ca75c0ac6a0.mockapi.io/users`;

export const service = {
  get: () => axios(API).then(({ data }) => data),
  delete: (id) => axios.delete(`${API}/${id}`).then(({ data }) => data),
  put: (item) => axios.put(`${API}/${item.id}`, item).then(({ data }) => data),
  post: (item) => axios.post(API, item).then(({ data }) => data),
};
