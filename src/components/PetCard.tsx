import styled from "styled-components";
import type { Pet } from "../types/pet";
import { useSelection } from "../context/SelectionContext";
import { Link } from "react-router-dom";

const Card = styled.div<{ selected: boolean }>`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #eee;
  transition: 0.2s;

  ${({ selected }) => selected && `outline: 2px solid #4f46e5;`}

  &:hover {
    transform: translateY(-3px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 12px;
`;

const Title = styled.h3`
  font-size: 15px;
  margin-bottom: 4px;
`;

const Desc = styled.p`
  font-size: 13px;
  color: #666;
`;

const Button = styled.button`
  margin-top: 8px;
  padding: 6px 10px;
  border-radius: 6px;
  background: #4f46e5;
  color: white;
  font-size: 12px;
`;

const DateText = styled.small`
  display: block;
  margin-top: 8px;
  font-size: 11px;
  color: #888;
  font-weight: 500;
  text-align: center;
  padding: 4px 0;
  border-top: 1px solid #f0f0f0;
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
