import styled from "styled-components";
import type { Pet } from "../types/pet";
import { useSelection } from "../context/SelectionContext";
import { Link } from "react-router-dom";

const Card = styled.div<{ selected: boolean }>`
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  transition:
    transform var(--motion-fast) var(--motion-curve),
    box-shadow var(--motion-fast) var(--motion-curve),
    border-color var(--motion-fast) var(--motion-curve);

  ${({ selected }) =>
    selected &&
    `
      border-color: #111827;
      box-shadow: inset 0 0 0 1px #111827;
    `}

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(17, 24, 39, 0.08);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  font-size: 16px;
  margin: 0 0 6px;
  color: #111827;
`;

const Desc = styled.p`
  font-size: 13px;
  color: #6b7280;
  line-height: 1.45;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  background: #f9fafb;
  color: #111827;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition:
    color var(--motion-fast) var(--motion-curve),
    background-color var(--motion-fast) var(--motion-curve),
    border-color var(--motion-fast) var(--motion-curve);

  &:hover {
    background: #111827;
    color: #ffffff;
    border-color: #111827;
  }
`;

const DateText = styled.small`
  display: block;
  margin-top: 8px;
  font-size: 11px;
  color: #6b7280;
  font-weight: 500;
  text-align: center;
  padding: 10px 0;
  border-top: 1px solid #f3f4f6;
`;

export const PetCard = ({ pet }: { pet: Pet }) => {
  const { selected, toggleSelect } = useSelection();
  const isSelected = selected.some((p) => p.id === pet.id); // Check if pet is selected

  return (
    <Card selected={isSelected}>
      <Link to={`/pets/${pet.id}`}>
        <Image src={pet.imageUrl} loading="lazy" />
      </Link>
      <Content>
        <Title>{pet.title}</Title>
        <Desc>{pet.description}</Desc>
        <Button onClick={() => toggleSelect(pet)}>
          {isSelected ? "Selected" : "Select"}
        </Button>
      </Content>
      <DateText>{new Date(pet.createdAt).toLocaleDateString()}</DateText>
    </Card>
  );
};
