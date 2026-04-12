import styled from "styled-components";
import type { Pet } from "../types/pet";
import { PetCard } from "./PetCard";

const Grid = styled.div`
  display: grid;
  gap: 16px;

  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Gallery = ({ pets }: { pets: Pet[] }) => {
  return (
    <Grid>
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </Grid>
  );
};
