import styled from "styled-components";
import { getClientConfig } from "../lib/getClientConfig";
import { useNavigate } from "react-router-dom";

const client = getClientConfig();

function ConfigTest() {
  const navigate = useNavigate();

  // Navigate to the /projects route
  const goToProjects = () => {
    navigate("/projects");
  };

  return (
    <Container>
      <Header>
        <Logo src={client.logo} alt="logo" />
        <h1>{client.name}</h1>
      </Header>
      <main>
        <Tagline color={client.primaryColor}>{client.tagline}</Tagline>
        <Button bg={client.primaryColor}>Book Now</Button>

        {/* Navigation Button to go to project page */}
        <NavButton bg={client.primaryColor} onClick={goToProjects}>
          View Our Projects
        </NavButton>
      </main>
    </Container>
  );
}

export default ConfigTest;

const Container = styled.div`
  font-family: sans-serif;
  padding: 2rem;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.img`
  height: 60px;
`;

const Tagline = styled.p<{ color: string }>`
  color: ${(props) => props.color};
`;

const Button = styled.button<{ bg: string }>`
  background: ${(props) => props.bg};
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin-top: 1rem;
`;

const NavButton = styled(Button)`
  margin-left: 1rem;
  margin-top: 0.5rem;
`;
