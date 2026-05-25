import {memo} from "react";

export default memo(function TodosStatistics({ todos }) {
  console.log(`🔄 in TodosStatistics`);
  return (
    <label>
      Stats:{" "}
      <ul>
        <li>All: {todos.length}</li>
        <li>isDone: {todos.filter((todo) => todo.isDone).length}</li>
        <li>Not isDone: {todos.filter((todo) => !todo.isDone).length}</li>
      </ul>
    </label>
  );
})