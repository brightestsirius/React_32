import { useState, useEffect } from "react";
// 🌟🔄🟢🟡🔴

const API = `https://6a05e129aa826ca75c0ac6a0.mockapi.io/users`;

export default function List() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(``);

  console.log(`🔄 in List`, list, isLoading);

  const fetchList = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(API);
      if (!res.ok) throw new Error(`Faild fetch`);

      const data = await res.json();
      setList(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log(`🟢 in compomentnDidMount`);
    fetchList();
  }, []);

  if(isLoading) return <p>Loading...</p>
  if(error) return <p>{error}</p>

  return list.length ? (
    <ul>
      {list.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  ) : null;
}
