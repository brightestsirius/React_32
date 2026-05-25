import { memo } from "react";

export default memo(function TodoList({ todos, color, handleChangeTodo }) {
  console.log(`🔄 in TodoList`);

  return todos.length ? (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ color }}>
          {todo.title}{" "}
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={(e) =>
              handleChangeTodo({ ...todo, isDone: e.target.checked })
            }
          />
        </li>
      ))}
    </ul>
  ) : null;
});
