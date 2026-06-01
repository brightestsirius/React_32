import { useLoaderData, Link, useSearchParams } from "react-router";
import { TODOS_FILTER } from "../../constants/todos";

export default function TodosList() {
  const todos = useLoaderData();
  const [searchParams] = useSearchParams();
  const searchParamsFilter = searchParams.get(`filter`);

  const getClassName = (item) => {
    const classes = [`todos__item`];
    item.isDone && classes.push(`todos__item--done`);
    return classes.join(` `);
  };

  const filtereTodos = searchParamsFilter
    ? todos.filter((todo) => {
        switch (searchParamsFilter) {
          case TODOS_FILTER.DONE:
            return todo.isDone;
          case TODOS_FILTER.NOT_DONE:
            return !todo.isDone;
          default:
            return todo;
        }
      })
    : todos;

  return filtereTodos.length ? (
    <ul>
      {filtereTodos.map((item) => (
        <li key={item.id}>
          <Link to={item.id} className={getClassName(item)}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  ) : null;
}
