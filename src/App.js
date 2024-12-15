import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
