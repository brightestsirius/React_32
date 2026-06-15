import { useSearchParams } from "react-router";

export default function LocationSearch() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const handleChange = (event) => {
    const params = new URLSearchParams(searchParams);

    if (event.target.value) {
      params.set("search", event.target.value);
    } else {
      params.delete("search");
    }

    setSearchParams(params);
  };

  return (
    <label>
      Search:{" "}
      <input
        type="text"
        placeholder="Search location..."
        value={search}
        onChange={handleChange}
      />
    </label>
  );
}
