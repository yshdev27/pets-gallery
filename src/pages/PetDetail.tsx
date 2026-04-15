import { useParams, Link } from "react-router-dom";
import { usePets } from "../hooks/usePets";
import styled from "styled-components";
import { Container } from "../components/Layout";

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  color: #374151;
  border: 1px solid #d1d5db;
  background: #f9fafb;
  border-radius: 10px;
  padding: 8px 12px;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 500;
  transition:
    color var(--motion-fast) var(--motion-curve),
    background-color var(--motion-fast) var(--motion-curve),
    border-color var(--motion-fast) var(--motion-curve);

  &:hover {
    color: #ffffff;
    background: #111827;
    border-color: #111827;
  }
`;

const Wrapper = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #e5e7eb;
`;

const Image = styled.img`
  width: 100%;
  max-height: 440px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 18px;
`;

const Title = styled.h1`
  margin: 0 0 10px;
  font-size: 30px;
  line-height: 1.2;
  color: #111827;
`;

const Description = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.7;
  color: #4b5563;
`;

const Meta = styled.small`
  margin-top: 14px;
  display: inline-block;
  color: #6b7280;
  border-top: 1px solid #f3f4f6;
  padding-top: 10px;
  font-size: 12px;
`;

const StateText = styled.p`
  color: #6b7280;
  margin: 0;
`;

export const PetDetail = () => {
  const { id } = useParams();
  const { data, loading } = usePets();

  if (loading)
    return (
      <Container>
        <StateText>Loading...</StateText>
      </Container>
    );

  const pet = data.find((p) => p.id === id);
  if (!pet)
    return (
      <Container>
        <StateText>Pet not found.</StateText>
      </Container>
    );

  return (
    <Container>
      <BackLink to="/">← Back</BackLink>

      <Wrapper>
        <Image src={pet.imageUrl} />
        <Title>{pet.title}</Title>
        <Description>{pet.description}</Description>

        <Meta>Created: {new Date(pet.createdAt).toLocaleDateString()}</Meta>
      </Wrapper>
    </Container>
  );
};
