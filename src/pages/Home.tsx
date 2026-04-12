import { usePets } from "../hooks/usePets";
import { Link } from "react-router-dom";
import { useSelection } from "../context/SelectionContext";

export const Home = () => {
  const { data, loading, error } = usePets();
  const { toggleSelect, selected } = useSelection();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data.length) return <p>No pets found</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Pets</h1>

      <p>{selected.length} selected</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {data.map((p) => {
          const isSelected = selected.some((s) => s.id === p.id);

          return (
            <div
              key={p.id}
              style={{
                border: "1px solid #ddd",
                padding: 10,
                borderRadius: 8,
                background: isSelected ? "#e0e7ff" : "white",
              }}
            >
              <Link to={`/pets/${p.id}`}>
                <strong>{p.title}</strong>
              </Link>

              <p>{p.description}</p>

              <button onClick={() => toggleSelect(p)}>
                {isSelected ? "Deselect" : "Select"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
