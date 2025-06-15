import { Link } from "react-router-dom";
import styled from "styled-components";
import { getClientConfig } from "../lib/getClientConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const client = getClientConfig();

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          {/* Logo and Description Column */}
          <FooterColumn>
            <LogoContainer>
              <FooterLogo src="/logofooter.png" alt="XPro Build Logo" />
            </LogoContainer>
            <CompanyInfo>Company No.: 10042248</CompanyInfo>
            <Description>Building dreams into reality with precision and excellence.</Description>
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">
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
                <span>Office: 020 8457 2921</span>
              </ContactItem>
              <ContactItem>
                <IconWrapper>
                  <FontAwesomeIcon icon={faPhone} />
                </IconWrapper>
                <span>Mobile: (+44) 07778970161</span>
              </ContactItem>
              <ContactItem>
                <IconWrapper>
                  <FontAwesomeIcon icon={faEnvelope} />
                </IconWrapper>
                <span>xprobuild4@gmail.com</span>
              </ContactItem>
              <ContactItem>
                <IconWrapper>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </IconWrapper>
                <span>137-139 Brent Street, London England, NW4 4DJ</span>
              </ContactItem>
            </ContactInfo>
          </FooterColumn>

          {/* Quick Links Column */}
          <FooterColumn>
            <ColumnTitle>Quick Links</ColumnTitle>
            <QuickLinks>
              <QuickLink to="/services">Services</QuickLink>
              <QuickLink to="/projects">Projects</QuickLink>
              <QuickLink to="/about">About Us</QuickLink>
              <QuickLink to="/contact">Contact</QuickLink>
              <QuickLink to="/privacy-policy">Privacy Policy</QuickLink>
            </QuickLinks>
          </FooterColumn>
        </FooterGrid>

        <Copyright>&copy; {new Date().getFullYear()} XPro Build. All rights reserved.</Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

// Styled Components
const FooterContainer = styled.footer`
  background-color: ${client.primaryColor};
  color: white;
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

const CompanyInfo = styled.p`
  margin-top: 1rem;
  color: ${client.secondaryColor};
`;

const Description = styled.p`
  margin-top: 1rem;
  color: ${client.secondaryColor};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialLink = styled.a`
  color: ${client.secondaryColor};
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
  color: ${client.secondaryColor};
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
  color: ${client.secondaryColor};
  transition: color 0.3s ease;

  &:hover {
    color: ${client.primaryColor};
    text-decoration: underline;
  }
`;

const Copyright = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${client.secondaryColor};
  text-align: center;
  color: ${client.secondaryColor };
`;
