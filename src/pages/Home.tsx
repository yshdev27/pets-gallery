import { useState } from "react";
import { usePets } from "../hooks/usePets";
import { useDebounce } from "../hooks/useDebounce";
import { Container } from "../components/Layout";
import { Controls } from "../components/Controls";
import { Toolbar } from "../components/Toolbar";
import { Gallery } from "../components/Gallery";
import { Skeleton } from "../components/Skeleton";
import styled from "styled-components";

const Hero = styled.section`
  margin-bottom: 24px;
`;

const Eyebrow = styled.p`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #6b7280;
  margin-bottom: 8px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  line-height: 1.2;
  color: #111827;
`;

const StateText = styled.p`
  margin: 0;
  color: #6b7280;
`;

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

  if (error)
    return (
      <Container>
        <StateText>{error}</StateText>
      </Container>
    );
  if (!data.length)
    return (
      <Container>
        <StateText>No pets found.</StateText>
      </Container>
    );

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
      <Hero>
        <Eyebrow>Collection</Eyebrow>
        <Title>Discover Pets</Title>
      </Hero>
      <Controls search={search} setSearch={setSearch} setSort={setSort} />
      <Toolbar pets={filtered} />
      <Gallery pets={filtered} />
    </Container>
  );
};
