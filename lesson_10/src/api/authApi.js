import { createService } from "./createService";
const apiUrl = import.meta.env.VITE_API_URL;
const API = `${apiUrl}/users`;
const service = createService(API);

export const authApi = {
  login: async (payload) => {
    const users = await service.get();
    const user = users.find(
      (item) =>
        item.email === payload.email && item.password === payload.password,
    );

    if (!user) throw new Error(`User not exist`);

    const { password, ...safeUser } = user;
    return { user: safeUser, accessToken: `mock-access-token` };
  },

  register: async (payload) => {
    const user = await service.post(payload);

    const { password, ...safeUser } = user;
    return { user: safeUser, accessToken: `mock-access-token` };
  },
};
