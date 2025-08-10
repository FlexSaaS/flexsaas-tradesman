import { Route, Routes } from "react-router-dom";
import ProjectPageTemp from "./pages/ProjectPageTemp";
import HomePage from "./pages/HomePage";
import AboutPageTemp from "./pages/AboutPageTemp";
import styled, { createGlobalStyle } from "styled-components";
import { getClientConfig } from "./lib/getClientConfig";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import ContactPage from "./pages/ContactUsPage";
import ServicesPage from "./pages/ServicesPage";
import ScrollToTopButton from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import ProductsPage from "./components/ProductsPage";
import { useEffect } from "react";

function App() {
  const client = getClientConfig();

  useEffect(() => {
    if (!client.favicon) return;

    let link: HTMLLinkElement | null =
      document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "shortcut icon";
      document.head.appendChild(link);
    }
    link.type = "image/png";
    link.href = client.favicon;
  }, [client.favicon]);

  return (
    <AppContainer fontFamily={client.fontFamily || "sans-serif"}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPageTemp />} />
        <Route path="/about" element={<AboutPageTemp />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <ScrollToTopButton />
      <WhatsAppButton />
      <Footer />
    </AppContainer>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const AppContainer = styled.div<{ fontFamily: string }>`
  font-family: ${(props) => props.fontFamily}, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
`;
