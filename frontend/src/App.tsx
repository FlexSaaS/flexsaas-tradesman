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

  // Set favicon
  useEffect(() => {
    if (!client.favicon) return;

    let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "shortcut icon";
      document.head.appendChild(link);
    }
    link.type = "image/png";
    link.href = client.favicon;
  }, [client.favicon]);

  // Set title + meta tags
  useEffect(() => {
    document.title = client.about?.seoTitle || client.name || "Default Title";

    if (client.about?.seoDescription) {
      let metaDesc = document.querySelector("meta[name='description']");
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", client.about.seoDescription);
    }

    if (client.about?.seoKeywords) {
      let metaKeywords = document.querySelector("meta[name='keywords']");
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", client.about.seoKeywords);
    }
  }, [client]);

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
