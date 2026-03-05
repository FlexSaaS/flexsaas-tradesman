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
  // Check if font is from Google and load it via @import in a style tag
  if (client.name === "Ethereal Vista" && client.fontFamily === "Jost") {
    const style = document.createElement("style");
    style.id = "ethereal-fonts";
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800&display=swap');
      
      *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
      html{scroll-behavior:smooth}
      body{font-family:'Jost',sans-serif;}
      ::-webkit-scrollbar{width:6px}
      ::-webkit-scrollbar-track{background:#1a1c22}
      ::-webkit-scrollbar-thumb{background:var(--teal);border-radius:3px}
      @keyframes gentlePulse{0%,100%{opacity:.3}50%{opacity:.6}}
      @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
      @keyframes modalIn{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}
      @keyframes overlayIn{from{opacity:0}to{opacity:1}}
      .fade-section{opacity:0;transform:translateY(40px);transition:all .9s cubic-bezier(.22,1,.36,1)}
      .fade-section.visible{opacity:1;transform:translateY(0)}
      body.modal-open{overflow:hidden}
    `;
    document.head.appendChild(style);
  }
}, [client.name, client.fontFamily]);
  
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
