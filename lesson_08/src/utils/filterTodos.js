import { TODOS_FILTER } from "../constants/todos";
export const filterTodos = (todos, filter = TODOS_FILTER.ALL) =>
  todos.filter((todo) => {
    switch (filter) {
      case TODOS_FILTER.DONE:
        return todo.isDone;
      case TODOS_FILTER.NOT_DONE:
        return !todo.isDone;
      default:
        return true;
    }
  });
