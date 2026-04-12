export const fetchPets = async () => {
  const res = await fetch("/pets.json");

  if (!res.ok) throw new Error("Failed to fetch pets");

  return res.json();
};
