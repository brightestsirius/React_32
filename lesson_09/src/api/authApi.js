import { createService } from "./createService";
const API = `https://6a05e129aa826ca75c0ac6a0.mockapi.io/users`;
const api = createService(API);

export const service = {
  login: async (credentials) => {
    const users = await api.get();
    const user = users.find(
      (user) =>
        user.email === credentials.email &&
        user.password === credentials.password,
    );

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const { password, ...safeUser } = user;

    return {
      user: safeUser,
      accessToken: "mock-access-token",
    };
  },

  register: async (credentials) => {
    const user = await api.post(credentials);
    const { password, ...safeUser } = user;
    return { user: safeUser, accessToken: "mock-access-token" };
  },
};
