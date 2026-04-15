import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Home } from "./pages/Home";
import { PetDetail } from "./pages/PetDetail";
import { About } from "./pages/About";

const AppShell = styled.div`
  min-height: 100vh;
  background: #ffffff;
  color: #0a0a0a;
`;

const Navbar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #e5e7eb;
`;

const NavContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.div`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #111827;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #4b5563;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  transition:
    color var(--motion-fast) var(--motion-curve),
    background-color var(--motion-fast) var(--motion-curve),
    border-color var(--motion-fast) var(--motion-curve);

  &:hover {
    color: #111827;
    background: #f9fafb;
    border-color: #e5e7eb;
  }

  &.active {
    color: #111827;
    background: #f3f4f6;
    border-color: #d1d5db;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Navbar>
          <NavContent>
            <Brand>Pet Gallery</Brand>
            <NavLinks>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/about">About</StyledLink>
            </NavLinks>
          </NavContent>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets/:id" element={<PetDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

export default App;
