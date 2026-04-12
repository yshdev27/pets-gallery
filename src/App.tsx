import { usePets } from "./hooks/usePets";

function App() {
  const { data, loading, error } = usePets();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data.length) return <p>No pets found</p>;

  return (
    <div>
      <h1>Pets</h1>
      {data.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
}

export default App;
