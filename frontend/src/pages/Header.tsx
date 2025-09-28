import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getClientConfig } from "../lib/getClientConfig";

const client = getClientConfig();

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <NavContainer>
        {/* Logo/Brand can go on the left */}
        <Logo to="/">
          <img src={client.logo} alt="Client Logo" />
        </Logo>

        {/* Navigation aligned to the right */}
        <RightAlignedNav>
          {/* Desktop Navigation */}
          <DesktopNav>
            <NavLink to="/">HOME</NavLink>
            {client.projects && client.projects.length > 0 && (
              <NavLink to="/services">SERVICES</NavLink>
            )}
            {client.projects && client.projects.length > 0 && (
              <NavLink to="/projects">GROOMING</NavLink>
            )}
            {client.products && client.products.length > 0 && (
              <NavLink to="/products">PRODUCTS</NavLink>
            )}
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
          </DesktopNav>

          {/* Mobile menu button */}
          <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <HamburgerLine $isOpen={isMenuOpen} $line={1} />
            <HamburgerLine $isOpen={isMenuOpen} $line={2} />
            <HamburgerLine $isOpen={isMenuOpen} $line={3} />
          </MobileMenuButton>
        </RightAlignedNav>

        {/* Mobile Navigation */}
        <MobileNav $isOpen={isMenuOpen}>
          <MobileNavContent>
            <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </MobileNavLink>

            {client.services && client.services.length > 0 && (
              <MobileNavLink
                to="/services"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </MobileNavLink>
            )}

            {client.projects && client.projects.length > 0 && (
              <MobileNavLink
                to="/projects"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </MobileNavLink>
            )}

            {client.products && client.products.length > 0 && (
              <MobileNavLink
                to="/products"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </MobileNavLink>
            )}
            <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </MobileNavLink>
            <MobileContactLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </MobileContactLink>
          </MobileNavContent>
        </MobileNav>
      </NavContainer>
    </HeaderContainer>
  );
}

export default Header;

// Styled Components
const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;

  img {
    height: 70px;
    width: auto;
    display: block;
  }
`;

const RightAlignedNav = styled.div`
  display: flex;
  align-items: center;
`;

const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  gap: 3rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled(Link)`
  color: ${client.primaryColor};
  font-weight: 450;
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
  letter-spacing: 0.05em;
  font-size: 0.9rem;

  &:hover {
    color: grey;
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  z-index: 20;

  @media (min-width: 768px) {
    display: none;
  }
`;

interface HamburgerLineProps {
  $isOpen: boolean;
  $line: number;
}

const HamburgerLine = styled.span<HamburgerLineProps>`
  display: block;
  height: 0.125rem;
  width: 1.5rem;
  background-color: ${client.primaryColor};
  position: absolute;
  transition: all 0.3s ease-in-out;

  ${({ $line }) => $line === 1 && `top: 0;`}
  ${({ $line }) => $line === 2 && `top: 0.5rem;`}
  ${({ $line }) => $line === 3 && `top: 1rem;`}

  ${({ $isOpen, $line }) =>
    $isOpen &&
    $line === 1 &&
    `transform: rotate(45deg) translate(0.35rem, 0.35rem);`}

  ${({ $isOpen, $line }) => $isOpen && $line === 2 && `opacity: 0;`}

  ${({ $isOpen, $line }) =>
    $isOpen &&
    $line === 3 &&
    `transform: rotate(-45deg) translate(0.35rem, -0.35rem);`}
`;

interface MobileNavProps {
  $isOpen: boolean;
}

const MobileNav = styled.div<MobileNavProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 10;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  max-height: ${({ $isOpen }) => ($isOpen ? "500px" : "0")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  padding-top: 4rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNavContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  gap: 1rem;
`;

const MobileNavLink = styled(Link)`
  color: ${client.primaryColor};
  font-weight: bold;
  text-decoration: none;
  padding: 0.75rem 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${client.primaryColorLight};
  }
`;

const MobileContactLink = styled(Link)`
  background-color: ${client.primaryColor};
  color: black;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
  text-align: center;

  &:hover {
    background-color: ${client.primaryColorLight};
  }
`;
