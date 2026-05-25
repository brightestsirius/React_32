import axios from "axios";

export const createService = (API) => {
  const get = (id) => axios(id ? `${API}/${id}` : API).then(({ data }) => data);
  const remove = (id) => axios.delete(`${API}/${id}`).then(({ data }) => data);
  const put = (value) =>
    axios.put(`${API}/${value.id}`, value).then(({ data }) => data);
  const post = (value) => axios.post(API, value).then(({ data }) => data);
  const usePromise = get();

  return { get, delete: remove, put, post, usePromise };
};