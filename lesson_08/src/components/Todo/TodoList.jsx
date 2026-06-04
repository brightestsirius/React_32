import { useSearchParams } from "react-router";
import { Link } from "react-router";
import { useTodosQuery } from "../../hooks/useTodosQuery";

import { filterTodos } from "../../utils/filterTodos";
import { useFavouritesStore } from "../../store/useFavouritesStore";

export default function TodoList() {
  const { data: todos = [], isLoading, isError, error } = useTodosQuery();

  const favouriteIds = useFavouritesStore(state => state.favouriteIds);
  const toggleFavourite = useFavouritesStore((state) => state.toggleFavourite);

  const [searchParams] = useSearchParams();
  const searchParamsFilter = searchParams.get(`filter`);

  const filteredTodos = filterTodos(todos, searchParamsFilter);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return filteredTodos.length ? (
    <ul>
      {filteredTodos.map((item) => {
        const isFavourite = favouriteIds.includes(item.id);

        return (
          <li key={item.id}>
            <Link to={item.id}>{item.title}</Link>{" "}
            <button onClick={() => toggleFavourite(item.id)}>
              {isFavourite ? `Remove from favourites` : `Add to favourites`}
            </button>
          </li>
        );
      })}
    </ul>
  ) : null;
}
