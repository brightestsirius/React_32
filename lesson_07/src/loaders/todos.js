import { service } from "../services/todos";

export const todosLoader = async () => {
  try {
    return await service.get();
  } catch (error) {
    throw new Error(error.message, { cause: error });
  }
};

export const todoLoader = async ({ params }) => {
  try {
    return await service.get(params.id);
  } catch (error) {
    throw new Error(error.message, { cause: error });
  }
};
