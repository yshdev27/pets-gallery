import styled from "styled-components";
import { Container } from "../components/Layout";

const Panel = styled.section`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
`;

const Eyebrow = styled.p`
  margin: 0 0 8px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #6b7280;
`;

const Title = styled.h1`
  margin: 0 0 10px;
  font-size: 28px;
  line-height: 1.2;
  color: #111827;
`;

const Description = styled.p`
  margin: 0;
  color: #4b5563;
  font-size: 15px;
  line-height: 1.7;
  max-width: 70ch;
`;

export const About = () => {
  return (
    <Container>
      <Panel>
        <Eyebrow>About</Eyebrow>
        <Title>Pet Gallery</Title>
        <Description>
          This project is a clean, lightweight gallery for browsing pet photos,
          filtering results, and managing quick selections.
        </Description>
      </Panel>
    </Container>
  );
};
