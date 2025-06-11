import { Routes, Route } from "react-router-dom";
import ConfigTest from "./Components/ConfigTest";
import ProjectPageTemp from "./pages/ProjectPageTemp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ConfigTest />} />

      <Route path="/projects" element={<ProjectPageTemp />} />
    </Routes>
  );
}

export default App;
