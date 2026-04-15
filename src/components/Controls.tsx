import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 12px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  background: #ffffff;
  color: #111827;
  font-size: 14px;
  transition:
    border-color var(--motion-fast) var(--motion-curve),
    box-shadow var(--motion-fast) var(--motion-curve),
    background-color var(--motion-fast) var(--motion-curve);

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #6b7280;
    box-shadow: 0 0 0 2px rgba(17, 24, 39, 0.08);
  }
`;

const Select = styled.select`
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  background: #ffffff;
  color: #111827;
  font-size: 14px;
  min-width: 140px;
  transition:
    border-color var(--motion-fast) var(--motion-curve),
    box-shadow var(--motion-fast) var(--motion-curve),
    background-color var(--motion-fast) var(--motion-curve);

  &:focus {
    outline: none;
    border-color: #6b7280;
    box-shadow: 0 0 0 2px rgba(17, 24, 39, 0.08);
  }
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
