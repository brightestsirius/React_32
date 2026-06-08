import { createService } from "./createService";
const apiUrl = import.meta.env.VITE_API_URL;
const API = `${apiUrl}/locations`;
export const service = createService(API);