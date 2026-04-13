import styled from "styled-components";
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

export const Toolbar = ({ pets }: any) => {
  const { selected, clear, selectAll } = useSelection();

  const totalSize = selected.reduce((acc, p) => acc + (p.size || 0), 0);

  const downloadImages = () => {
    selected.forEach((pet) => {
      const link = document.createElement("a");
      link.href = pet.imageUrl;
      link.download = pet.title;
      link.click();
    });
  };

  return (
    <Bar>
      <div>
        <strong>{selected.length}</strong> selected •{" "}
        {(totalSize / 1024).toFixed(2)} MB
      </div>

      <Actions>
        <Button onClick={downloadImages}>Download</Button>
        <Button onClick={() => selectAll(pets)}>Select All</Button>
        <Button onClick={clear}>Clear</Button>
      </Actions>
    </Bar>
  );
};
