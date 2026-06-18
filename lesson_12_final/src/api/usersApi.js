import { createService } from "./createService";

const apiUrl = import.meta.env.VITE_API_URL;
const API = `${apiUrl}/users`;

export const usersApi = createService(API);
