import { useBears } from "../../store/bearsStore";
import { useBearsQuery } from "../../hooks/useBearsQuery";
import { useUpdateBearMutation } from "../../hooks/useUpdateBearMutation";

export default function Bears() {
  const bears = useBears((state) => state.bears);
  const increasePopulation = useBears((state) => state.increasePopulation);
  const updateBears = useBears((state) => state.updateBears);

  const {
    data: bearsData = [],
    isLoading,
    isError,
    error,
  } = useBearsQuery();
  const updateBearMutation = useUpdateBearMutation();

  return (
    <div>
      <span>Bears: {bears}</span>{" "}
      <button onClick={increasePopulation}>+</button>{" "}
      <input type="number" onBlur={(e) => updateBears(+e.target.value)} />
      <hr />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error {error.message}</p>}
      {bearsData.length ? (
        <ul>
          {bearsData.map((bear) => (
            <li
              key={bear.id}
              style={{ color: bear.isActive && `crimson` }}
              onClick={() =>
                updateBearMutation.mutate({ ...bear, isActive: !bear.isActive })
              }
            >
              {bear.name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
