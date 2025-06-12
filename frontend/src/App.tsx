import { Routes, Route } from "react-router-dom";
import ProjectPageTemp from "./pages/ProjectPageTemp";
import HomePage from "./pages/HomePage";
import AboutPageTemp from "./pages/AboutPageTemp";


function App() {
  
  return (
    <Routes>
      <Route path="/projects" element={<ProjectPageTemp />} />
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPageTemp />} />
    </Routes>
  );
}

export default App;
