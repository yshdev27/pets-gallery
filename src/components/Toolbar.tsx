import styled from "styled-components";
import type { Pet } from "../types/pet";
import { useSelection } from "../context/SelectionContext";

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  padding: 12px 16px;
  border-radius: 12px;
  margin-bottom: 16px;
  color: #111827;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background: #f9fafb;
  color: #111827;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition:
    color var(--motion-fast) var(--motion-curve),
    background-color var(--motion-fast) var(--motion-curve),
    border-color var(--motion-fast) var(--motion-curve);

  &:hover {
    background: #111827;
    color: #ffffff;
    border-color: #111827;
  }
`;

export const Toolbar = ({ pets }: { pets: Pet[] }) => {
  const { selected, clear, selectAll } = useSelection();

  const totalSize = selected.reduce((acc, p) => acc + (p.size || 0), 0);

  const downloadImages = async () => {
    for (const pet of selected) {
      try {
        const response = await fetch(pet.imageUrl);
        const blob = await response.blob();

        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.download = `${pet.title}.jpg`;

        document.body.appendChild(link);
        link.click();
        link.remove();

        window.URL.revokeObjectURL(url);
      } catch (err) {
        console.error("Download failed:", err);
      }
    }
  };

  return (
    <Bar>
      <div>
        <strong>{selected.length}</strong> selected •{" "}
        {(totalSize / 1024).toFixed(2)} MB
      </div>

      <Actions>
        <Button onClick={() => selectAll(pets)}>Select All</Button>
        <Button onClick={clear}>Clear</Button>
        <Button onClick={downloadImages}>Download</Button>
      </Actions>
    </Bar>
  );
};
