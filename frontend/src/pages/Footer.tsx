import { Link } from "react-router-dom";
import styled from "styled-components";
import { getClientConfig } from "../lib/getClientConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const client = getClientConfig();

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          {/* Logo and Description Column */}
          <FooterColumn>
            <LogoContainer>
              <FooterLogo src={client.logo} />
            </LogoContainer>
            {/* <CompanyInfo>Company No.: {client.companyNo}</CompanyInfo> */}
            <Description>{client.tagline}</Description>
            <SocialLinks>
              <SocialLink href={client.companyNo} aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </SocialLink>
              <SocialLink href={client.instagram} aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </SocialLink>
              <SocialLink href={client.twitter} aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </SocialLink>
              <SocialLink href={client.linkedIn} aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </SocialLink>
            </SocialLinks>
          </FooterColumn>

          {/* Contact Info Column */}
          <FooterColumn>
            <ColumnTitle>Contact Info</ColumnTitle>
            <ContactInfo>
              <ContactItem>
                <IconWrapper>
                  <FontAwesomeIcon icon={faPhone} />
                </IconWrapper>
                <span>Office: {client.phoneOffice}</span>
              </ContactItem>
              <ContactItem>
                <IconWrapper>
                  <FontAwesomeIcon icon={faPhone} />
                </IconWrapper>
                <span>Mobile: {client.phoneMobile}</span>
              </ContactItem>
              <ContactItem>
                <IconWrapper>
                  <FontAwesomeIcon icon={faEnvelope} />
                </IconWrapper>
                <span>Email: {client.email}</span>
              </ContactItem>
              <ContactItem>
                <IconWrapper>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </IconWrapper>
                <span>{client.address}</span>
              </ContactItem>
            </ContactInfo>
          </FooterColumn>

          {/* Quick Links Column */}
          <FooterColumn>
            <ColumnTitle>Quick Links</ColumnTitle>
            <QuickLinks>
              {client.services && client.services.length > 0 && <QuickLink to="/services">Services</QuickLink>}
              {client.projects && client.projects.length > 0 && <QuickLink to="/projects">Projects</QuickLink>}
              {client.products && client.products.length > 0 && <QuickLink to="/products">Products</QuickLink>}
              <QuickLink to="/about">About Us</QuickLink>
              <QuickLink to="/contact">Contact</QuickLink>
              <QuickLink to="/privacy-policy">Privacy Policy</QuickLink>
            </QuickLinks>
          </FooterColumn>
        </FooterGrid>

        <Copyright>
          &copy; {new Date().getFullYear()} {client.name}. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;

// Styled Components
const FooterContainer = styled.footer`
  background-color: white;
  border-top: 3px solid ${client.primaryColor};
  color: black;
  padding: 3rem 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FooterLogo = styled.img`
  height: 80px;
  width: 160px;

  @media (min-width: 768px) {
    height: 64px;
    width: auto;
  }
`;

// const CompanyInfo = styled.p`
//   margin-top: 1rem;
//   color: ${client.primaryColor};
// `;

const Description = styled.p`
  margin-top: 1rem;
  color: ${client.primaryColor};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialLink = styled.a`
  color: ${client.primaryColor};
  font-size: 1.2rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    color: ${client.primaryColor};
    transform: translateY(-3px);
  }
`;

const ColumnTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: ${client.primaryColor};
`;

const IconWrapper = styled.div`
  color: ${client.primaryColor};
  width: 1.25rem;
  display: flex;
  justify-content: center;
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const QuickLink = styled(Link)`
  color: ${client.primaryColor};
  transition: color 0.3s ease;
  text-decoration: none;

  &:hover {
    color: ${client.primaryColor};
    text-decoration: underline;
  }
`;

const Copyright = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${client.primaryColor};
  text-align: center;
  color: ${client.primaryColor};
`;
