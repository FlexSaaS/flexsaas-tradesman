
import { Route, Routes } from "react-router-dom";
import ConfigTest from "./Components/ConfigTest";
import ProjectPageTemp from "./pages/ProjectPageTemp";
import HomePage from "./pages/HomePage";
import AboutPageTemp from "./pages/AboutPageTemp";
import styled, { createGlobalStyle } from "styled-components";
import { getClientConfig } from "./lib/getClientConfig";


function App() {
  const client = getClientConfig();

  return (
    <AppContainer fontFamily={client.fontFamily}>
      <GlobalStyle />
    <Routes>
      <Route path="/projects" element={<ProjectPageTemp />} />
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPageTemp />} />
    </Routes>
    </AppContainer>
}

export default App;

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  }
`;

const AppContainer = styled.div<{ fontFamily: string }>`
  font-family: ${(props) => props.fontFamily}, sans-serif;
  min-height: 100vh;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
`;
