import React, { createContext, useContext, useEffect, useState } from "react";
import type { Pet } from "../types/pet";

interface SelectionContextType {
  selected: Pet[];
  toggleSelect: (pet: Pet) => void;
  clear: () => void;
  selectAll: (pets: Pet[]) => void;
}

const SelectionContext = createContext<SelectionContextType | null>(null);

const STORAGE_KEY = "selectedPets";

export const SelectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selected, setSelected] = useState<Pet[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : []; // Load from localStorage
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selected)); // Save to localStorage
  }, [selected]);

  const toggleSelect = (pet: Pet) => {
    setSelected((prev) =>
      prev.some((p) => p.id === pet.id)
        ? prev.filter((p) => p.id !== pet.id)
        : [...prev, pet],
    );
  };

  const clear = () => setSelected([]);

  const selectAll = (pets: Pet[]) => setSelected(pets);

  return (
    <SelectionContext.Provider
      value={{ selected, toggleSelect, clear, selectAll }}
    >
      {children}
    </SelectionContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSelection = () => useContext(SelectionContext)!;
