import { useBearsStore } from "../../store/useBearsStore";
import { useQueryBears } from "../../hooks/useQueryBears";
import { useUpdateMutationBear } from "../../hooks/useUpdateMutationBear";

export default function Bears() {
  const bears = useBearsStore((state) => state.bears);
  const increasePopulation = useBearsStore((state) => state.increasePopulation);
  const updateBears = useBearsStore((state) => state.updateBears);

  const { data: bearsData = [], isLoading, isError, error } = useQueryBears();
  const updateMutationBear = useUpdateMutationBear();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error {error.message}</p>;

  return (
    <div style={{ border: `1px solid black`, padding: `10px` }}>
      <span>Client Bears from Zustand: {bears}</span>{" "}
      <button onClick={increasePopulation}>Add</button>{" "}
      <input type="number" onBlur={(e) => updateBears(+e.target.value)} />
      <hr />
      {bearsData.length ? (
        <ul>
          {bearsData.map((bear) => (
            <li
              key={bear.id}
              style={{ color: bear.isActive && `crimson` }}
              onClick={() =>
                updateMutationBear.mutate({ ...bear, isActive: !bear.isActive })
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
