import axios from "axios";

export const createService = (API) => {
  const get = (id) =>
    axios.get(id ? `${API}/${id}` : API).then(({ data }) => data);

  const remove = (id) => axios.delete(`${API}/${id}`).then(({ data }) => data);

  const put = (item) =>
    axios.put(`${API}/${item.id}`, item).then(({ data }) => data);

  const post = (item) => axios.post(API, item).then(({ data }) => data);

  return { get, delete: remove, put, post };
};