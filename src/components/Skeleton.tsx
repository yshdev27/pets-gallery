import styled from "styled-components";

const Box = styled.div`
  height: 180px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
  background-size: 200% 100%;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`;

export const Skeleton = () => <Box />;
