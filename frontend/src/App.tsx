import { Routes, Route } from "react-router-dom";
import ConfigTest from "./Components/ConfigTest";
import ProjectPageTemp from "./pages/ProjectPageTemp";
import AboutPageTemp from "./pages/AboutPageTemp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ConfigTest />} />

      <Route path="/projects" element={<ProjectPageTemp />} />

      <Route path="/about" element={<AboutPageTemp />} />
    </Routes>
  );
}

export default App;
