import { useParams, Link } from "react-router-dom";
import { usePets } from "../hooks/usePets";
import styled from "styled-components";
import { Container } from "../components/Layout";

const Wrapper = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #eee;
`;

const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const PetDetail = () => {
  const { id } = useParams();
  const { data, loading } = usePets();

  if (loading) return <p>Loading...</p>;

  const pet = data.find((p) => p.id === id);
  if (!pet) return <p>Not found</p>;

  return (
    <Container>
      <Link to="/">← Back</Link>

      <Wrapper>
        <Image src={pet.imageUrl} />
        <h1>{pet.title}</h1>
        <p>{pet.description}</p>

        <small>Created: {new Date(pet.createdAt).toLocaleDateString()}</small>
      </Wrapper>
    </Container>
  );
};
