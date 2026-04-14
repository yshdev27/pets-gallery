import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: white;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: white;
`;

export const Controls = ({
  search,
  setSearch,
  setSort,
}: {
  search: string;
  setSearch: (value: string) => void;
  setSort: (value: string) => void;
}) => {
  return (
    <Wrapper>
      <Input
        placeholder="Search pets..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Select onChange={(e) => setSort(e.target.value)}>
        <option value="AZ">A-Z</option>
        <option value="ZA">Z-A</option>
        <option value="NEW">Newest</option>
        <option value="OLD">Oldest</option>
      </Select>
    </Wrapper>
  );
};
