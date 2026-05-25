import { useState } from "react";

export const TODOS_FILTER = {
  TODOS_FILTER_ALL: `TODOS_FILTER_ALL`,
  TODOS_FILTER_DONE: `TODOS_FILTER_DONE`,
  TODOS_FILTER_NOT_DONE: `TODOS_FILTER_NOT_DONE`,
};

export default function useTodosFilter() {
  const [filter, setFilter] = useState(TODOS_FILTER.TODOS_FILTER_ALL);

  return { filter, setFilter };
}
