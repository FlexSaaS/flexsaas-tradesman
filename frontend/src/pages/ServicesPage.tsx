import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getClientConfig } from "../lib/getClientConfig";

const client = getClientConfig();

const PageWrapper = styled.div`
  padding: 5rem 0;
  background: #f9fafb;
`;

const Container = styled.div`
  max-width: 90rem; /* 7xl */
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #4b5563;
  max-width: 48rem;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  position: relative;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 6px rgb(0 0 0 / 0.1);
  padding: 2rem;
  cursor: pointer;
  overflow: hidden;
  transition: box-shadow 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 8px 24px rgb(0 0 0 / 0.2);

    &::before {
      opacity: 0.1;
      transform: scaleX(1);
    }

    & > div.icon-wrapper {
      transform: scale(1.1) rotate(12deg);
    }

    & h3,
    & p {
      transform: translateX(0.5rem);
    }

    & > div.underline {
      transform: scaleX(1);
    }
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${client.primaryColor};
    opacity: 0;
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    transform-origin: left;
    transform: scaleX(0);
    z-index: 0;
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 1rem;
  transition: transform 0.5s ease-in-out;
  display: inline-block;
  color: ${client.primaryColor};
  font-size: 3rem; /* approx h-12 w-12 */
  position: relative;
  z-index: 10;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #111827;
  transition: transform 0.5s ease-in-out;
  position: relative;
  z-index: 10;
`;

const CardDesc = styled.p`
  color: #4b5563;
  transition: transform 0.5s ease-in-out;
  position: relative;
  z-index: 10;
`;

const Underline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0.25rem;
  width: 100%;
  background: ${client.primaryColor};
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.5s ease-in-out;
  z-index: 10;
`;

const CTASection = styled.div`
  margin-top: 5rem;
  background: #111827;
  border-radius: 0.5rem;
  padding: 3rem;
  text-align: center;
  color: #e5e7eb;
`;

const CTATitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
`;

const CTADesc = styled.p`
  max-width: 40rem;
  margin: 0 auto 2rem auto;
  color: #9ca3af;
`;

const CTAButton = styled.a`
  display: inline-block;
  background: ${client.primaryColor};
  color: black;
  padding: 0.75rem 2rem;
  border-radius: 0.375rem;
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background: #e6c200;
  }
`;

const ServicesPage = () => {
  return (
    <PageWrapper>
      <Container>
        <Header>
          <Title>Our Services</Title>
          <Subtitle>
            We offer a comprehensive range of construction and renovation
            services, each delivered with the highest standards of quality and
            professionalism.
          </Subtitle>
        </Header>

        <Grid>
          {client.services.map((service, idx) => (
            <Card key={idx}>
              <IconWrapper className="icon-wrapper">
                <FontAwesomeIcon icon={service.icon} />
              </IconWrapper>
              <CardTitle>{service.title}</CardTitle>
              <CardDesc>{service.description}</CardDesc>
              <Underline className="underline" />
            </Card>
          ))}
        </Grid>

        <CTASection>
          <CTATitle>Ready to Start Your Project?</CTATitle>
          <CTADesc>
            Contact us today for a free consultation and quote. We're here to
            help bring your vision to life.
          </CTADesc>
          <CTAButton href="/contact">Get in Touch</CTAButton>
        </CTASection>
      </Container>
    </PageWrapper>
  );
};

export default ServicesPage;
