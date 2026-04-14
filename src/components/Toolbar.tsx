import styled from "styled-components";
import type { Pet } from "../types/pet";
import { useSelection } from "../context/SelectionContext";

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border: 1px solid #eee;
  padding: 12px 16px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  padding: 6px 12px;
  border-radius: 6px;
  background: #111;
  color: white;
  font-size: 13px;

  &:hover {
    opacity: 0.9;
  }
`;

export const Toolbar = ({ pets }: { pets: Pet[] }) => {
  const { selected, clear, selectAll } = useSelection();

  const totalSize = selected.reduce((acc, p) => acc + (p.size || 0), 0);

  // ✅ FIXED DOWNLOAD FUNCTION
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
