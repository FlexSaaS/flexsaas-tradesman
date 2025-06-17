import  { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { getClientConfig } from "../lib/getClientConfig";

const client = getClientConfig();

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "+447778970161";
  const message = "Hi! I'm interested in your construction services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Mobile Button */}
      <MobileWhatsAppLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} />
      </MobileWhatsAppLink>

      {/* Desktop Button */}
      <DesktopWhatsAppLink
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <DesktopButtonContent $isHovered={isHovered}>
          <WhatsAppIcon $isHovered={isHovered}>
            <FontAwesomeIcon icon={faWhatsapp} />
          </WhatsAppIcon>
          <ButtonText $isHovered={isHovered}>WhatsApp</ButtonText>
        </DesktopButtonContent>
      </DesktopWhatsAppLink>
    </>
  );
};

export default WhatsAppButton;

// Styled Components
const WhatsAppLinkBase = styled.a`
  position: fixed;
  z-index: 55;
  background-color: green;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${client.primaryColorLight || "#E6C200"};
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  svg {
    font-size: 1.25rem;
  }
`;

const MobileWhatsAppLink = styled(WhatsAppLinkBase)`
  bottom: 1rem;
  left: 1rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopWhatsAppLink = styled(WhatsAppLinkBase)`
  display: none;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  border-radius: 0;
  width: auto;
  height: auto;
  background-color: transparent;
  box-shadow: none;
  padding: 0;

  @media (min-width: 768px) {
    display: flex;
  }

  &:hover {
    background-color: transparent;
    transform: translateY(-50%);
    box-shadow: none;
  }
`;

interface DesktopButtonProps {
  $isHovered: boolean;
}

const DesktopButtonContent = styled.div<DesktopButtonProps>`
  display: flex;
  align-items: center;
  background-color: green;
  color: white;
  backdrop-filter: blur(4px);
  padding: 0.75rem 1rem;
  border-radius: 0.375rem 0 0 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: ${({ $isHovered }) => ($isHovered ? "translateX(0)" : "translateX(calc(100% - 3rem))")};
  transition: all 0.3s ease-in-out;
`;

const WhatsAppIcon = styled.div<DesktopButtonProps>`
  min-width: 1.5rem;
  transition: transform 0.3s ease;
  transform: ${({ $isHovered }) => ($isHovered ? "scale(1.9)" : "scale(1.5)")};
  color: white;
`;

const ButtonText = styled.span<DesktopButtonProps>`
  margin-left: 0.5rem;
  color: white;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  transition: all 0.3s ease;
  max-width: ${({ $isHovered }) => ($isHovered ? "100px" : "0")};
  opacity: ${({ $isHovered }) => ($isHovered ? "1" : "0")};
`;
