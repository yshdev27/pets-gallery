import { usePets } from "../hooks/usePets";
import { Link } from "react-router-dom";

export const Home = () => {
  const { data, loading, error } = usePets();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data.length) return <p>No pets found</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Pets</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {data.map((p) => (
          <Link
            key={p.id}
            to={`/pets/${p.id}`}
            style={{
              padding: 10,
              border: "1px solid #ddd",
              borderRadius: 8,
              textDecoration: "none",
              color: "black",
            }}
          >
            <strong>{p.title}</strong>
            <p style={{ margin: 0 }}>{p.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
