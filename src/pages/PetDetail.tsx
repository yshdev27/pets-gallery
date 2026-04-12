import { useParams } from "react-router-dom";
import { usePets } from "../hooks/usePets";

export const PetDetail = () => {
  const { id } = useParams();
  const { data } = usePets();

  const pet = data.find((p) => p.id === id);

  if (!pet) return <p>Pet not found</p>;

  return (
    <div>
      <h1>{pet.title}</h1>
      <img src={pet.imageUrl} width="300" />
      <p>{pet.description}</p>
      <small>{new Date(pet.createdAt).toLocaleDateString()}</small>
    </div>
  );
};
