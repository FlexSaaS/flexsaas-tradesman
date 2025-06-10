import styled from "styled-components";
import { getClientConfig } from "../lib/getClientConfig";

// You must have this config at the top of every component.
const config = getClientConfig();

function ConfigTest() {
  return (
    <Container>
      <Header>
        <Logo src={config.logo} alt="logo" />
        <h1>{config.name}</h1>
      </Header>
      <main>
        <Tagline color={config.primaryColor}>{config.tagline}</Tagline>
        <Button bg={config.primaryColor}>Book Now</Button>
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
