import type { Pet } from "../types/pet";

export const fetchPets = async (): Promise<Pet[]> => {
  const res = await fetch("/pets.json");

  if (!res.ok) throw new Error("Failed to fetch pets");

  return res.json();
};
