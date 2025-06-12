import { Routes, Route } from "react-router-dom";
import ProjectPageTemp from "./pages/ProjectPageTemp";
import HomePage from "./pages/HomePage";

function App() {
  
  return (
    <Routes>
      <Route path="/projects" element={<ProjectPageTemp />} />
      <Route path="/" element={<HomePage/>} />
    </Routes>
  );
}

export default App;
