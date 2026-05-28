import { memo, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TodosContext } from "../../contexts/TodosContext";

export default memo(function TodosStatistics() {
  const { todos, color } = useContext(TodosContext);
  const { userStatus } = useContext(UserContext);

  return (
    <label>
      Stats:{" "}
      <ul style={{ color: userStatus && color }}>
        <li>All: {todos.length}</li>
        <li>isDone: {todos.filter((todo) => todo.isDone).length}</li>
        <li>Not isDone: {todos.filter((todo) => !todo.isDone).length}</li>
      </ul>
    </label>
  );
});
