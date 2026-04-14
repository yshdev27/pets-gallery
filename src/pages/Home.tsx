import { useState } from "react";
import { usePets } from "../hooks/usePets";
import { useDebounce } from "../hooks/useDebounce";
import { Container } from "../components/Layout";
import { Controls } from "../components/Controls";
import { Toolbar } from "../components/Toolbar";
import { Gallery } from "../components/Gallery";
import { Skeleton } from "../components/Skeleton";

export const Home = () => {
  const { data, loading, error } = usePets();

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("AZ");

  const debouncedSearch = useDebounce(search);

  if (loading)
    return (
      <Container>
        <div style={{ display: "grid", gap: 16 }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} />
          ))}
        </div>
      </Container>
    );

  if (error) return <p>{error}</p>;
  if (!data.length) return <p>No pets found</p>;

  // Filter and sort pets
  // Filter and sort pets
  const filtered = data
    .filter(
      (p) =>
        p.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        p.description.toLowerCase().includes(debouncedSearch.toLowerCase()),
    )
    .sort((a, b) => {
      if (sort === "AZ") return a.title.localeCompare(b.title);
      if (sort === "ZA") return b.title.localeCompare(a.title);
      if (sort === "NEW")
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      if (sort === "OLD")
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      return 0;
    });

  return (
    <Container>
      <Controls search={search} setSearch={setSearch} setSort={setSort} />
      <Toolbar pets={filtered} />
      <Gallery pets={filtered} />
    </Container>
  );
};
