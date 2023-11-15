import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPanding, setIsPanding] = useState(false);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    const fetchData = async () => {
      setIsPanding(true);
      try {
        const ref = await fetch(url);
        if (!ref.ok) {
          throw new Error("Something went wrong...");
        }
        const res = await ref.json();
        setData(res);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsPanding(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, isPanding, error };
}
