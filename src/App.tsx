import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { PetDetail } from "./pages/PetDetail";
import { About } from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          display: "flex",
          gap: 16,
          padding: 16,
          borderBottom: "1px solid #eee",
          background: "white",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets/:id" element={<PetDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
