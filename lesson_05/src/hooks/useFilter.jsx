import { useState } from "react";
import { TODOS_FILTER_ALL } from "../constants/todos";

export default function useFilter() {
  const [filter, setFilter] = useState(TODOS_FILTER_ALL);
  return { filter, setFilter };
}