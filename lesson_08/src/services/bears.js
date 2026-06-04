import { createService } from "./createService";
const API = `${import.meta.env.VITE_API_URL}/bears`;
export const service = createService(API);
