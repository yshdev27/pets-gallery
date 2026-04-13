import styled from "styled-components";

const Box = styled.div`
  height: 180px;
  border-radius: 12px;
  background: #eee;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    }
  }
`;

export const Skeleton = () => <Box />;
