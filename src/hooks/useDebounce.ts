import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay = 300) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value); // Update after delay
    }, delay);

    return () => clearTimeout(timer); // Clear timer on value change
  }, [value, delay]);

  return debounced;
};
