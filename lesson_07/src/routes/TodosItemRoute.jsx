import { useParams } from "react-router";
import TodosItem from "../components/Todos/TodosItem";
import NavigationBtn from "../components/NavigationBtn/NavigationBtn";

export default function TodosItemRoute() {
  const { id } = useParams();

  return (
    <>
      <h3>Todos Item #{id} Route</h3>
      <TodosItem />
      <NavigationBtn path="/todos">Back to todos</NavigationBtn>
    </>
  );
}
