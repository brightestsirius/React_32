import { createService } from "./createService";
const API = `${import.meta.env.VITE_API_URL}/todos`;
export const service = createService(API);
