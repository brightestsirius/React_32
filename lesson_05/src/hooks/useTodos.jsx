import { use, useState } from "react";
import { service } from "../services/todos";

export default function useTodos() {
  const todosInitial = use(service.usePromise);
  const [todos, setTodos] = useState(todosInitial);

  const handleChangeTodo = async (todo) => {
    try {
      const updatedTodo = await service.put(todo);
      setTodos((prevState) =>
        prevState.map((item) => {
          return item.id === updatedTodo.id ? updatedTodo : item;
        }),
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return { todos, handleChangeTodo };
}
