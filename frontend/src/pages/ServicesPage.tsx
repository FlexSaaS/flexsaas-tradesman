import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faClock } from "@fortawesome/free-solid-svg-icons";
import { getClientConfig } from "../lib/getClientConfig";

const client = getClientConfig();
const isEthereal = client.name?.toLowerCase().includes("ethereal") && Array.isArray(client.detailedServices) && client.detailedServices.length > 0;
const bookingHref = isEthereal
  ? "https://www.fresha.com/a/beauty-technicians-accra-102-nii-nortei-nyanchi-street-d0g71ydr/booking?cartId=056ccff0-bcd1-4141-bdb2-a2c8d6b50a1a"
  : "/contact";

function ServicesPage() {
  if (isEthereal) {
    return <EtherealServicesPage />;
  }

  if (!Array.isArray(client.services) || client.services.length === 0) {
    return null;
  }

  return (
    <PageWrapper>
      <Container>
        <Header>
          <Title>Our Services</Title>
          <Subtitle>{client.serviceDescription}</Subtitle>
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
          <CTATitle>{client.serviceCTATitle || "Service Title Not Set"}</CTATitle>
          <CTADesc>{client.serviceCTADescription || "Service Description Not Yet"}</CTADesc>
          <CTAButton href={bookingHref}>Book an Appointment</CTAButton>
        </CTASection>
      </Container>
    </PageWrapper>
  );
}

function EtherealServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <PageWrapper>
      <Container>
        <Header>
          <Title>Ethereal Services</Title>
          <Subtitle>{client.serviceDescription}</Subtitle>
        </Header>

        <LuxuryIntro>
          <LuxuryIntroText>
            Explore our curated beauty rituals. Each service comes with a base experience, and where available, you can elevate it further with
            luxurious add-ons tailored to your needs.
          </LuxuryIntroText>
        </LuxuryIntro>

        <ServiceList>
          {client.detailedServices?.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <ServiceCard key={service.title}>
                <ServiceTop>
                  <ServiceMain>
                    <ServiceIcon>
                      <FontAwesomeIcon icon={service.icon} />
                    </ServiceIcon>

                    <ServiceContent>
                      <ServiceTitleRow>
                        <ServiceName>{service.title}</ServiceName>

                        <PriceBadge>{service.isFree ? "Free" : `from ${client.currencySymbol}${service.basePrice ?? 0}`}</PriceBadge>
                      </ServiceTitleRow>

                      {service.duration && (
                        <MetaRow>
                          <MetaItem>
                            <FontAwesomeIcon icon={faClock} />
                            <span>{service.duration}</span>
                          </MetaItem>
                        </MetaRow>
                      )}

                      <ServiceDescription>{service.description}</ServiceDescription>
                    </ServiceContent>
                  </ServiceMain>

                  {service.addons && service.addons.length > 0 && (
                    <ToggleButton
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-label={isOpen ? `Hide add-ons for ${service.title}` : `Show add-ons for ${service.title}`}>
                      <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
                    </ToggleButton>
                  )}
                </ServiceTop>

                {isOpen && service.addons && service.addons.length > 0 && (
                  <AddonsSection>
                    <AddonsHeader>Additional / Extra Services</AddonsHeader>

                    <AddonGrid>
                      {service.addons.map((addon) => (
                        <AddonCard key={addon.name}>
                          <AddonTitleRow>
                            <AddonName>{addon.name}</AddonName>
                            <AddonPrice>
                              +{client.currencySymbol}
                              {addon.price}
                            </AddonPrice>
                          </AddonTitleRow>

                          {addon.duration && (
                            <AddonMeta>
                              <FontAwesomeIcon icon={faClock} />
                              <span>{addon.duration}</span>
                            </AddonMeta>
                          )}

                          <AddonDescription>{addon.description}</AddonDescription>
                        </AddonCard>
                      ))}
                    </AddonGrid>
                  </AddonsSection>
                )}
              </ServiceCard>
            );
          })}
        </ServiceList>

        <CTASection>
          <CTATitle>{client.serviceCTATitle}</CTATitle>
          <CTADesc>{client.serviceCTADescription}</CTADesc>
          <CTAButton href={bookingHref} target="_blank" rel="noreferrer">
            Book an Appointment
          </CTAButton>
        </CTASection>
      </Container>
    </PageWrapper>
  );
}

export default ServicesPage;

const PageWrapper = styled.div`
  padding: 5rem 0;
  background: #f9fafb;
`;

const Container = styled.div`
  max-width: 90rem;
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
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #4b5563;
  max-width: 48rem;
  margin: 0 auto;
  line-height: 1.8;
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
    transition:
      opacity 0.5s ease-in-out,
      transform 0.5s ease-in-out;
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
  font-size: 3rem;
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

const LuxuryIntro = styled.div`
  max-width: 56rem;
  margin: 0 auto 3rem auto;
  background: linear-gradient(135deg, #ffffff 0%, #faf6f2 100%);
  border: 1px solid rgba(128, 0, 0, 0.08);
  border-radius: 1.25rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
`;

const LuxuryIntroText = styled.p`
  font-size: 1.05rem;
  line-height: 1.9;
  color: #5b5563;
  text-align: center;
`;

const ServiceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ServiceCard = styled.div`
  background: white;
  border: 1px solid #ece7e1;
  border-radius: 1.25rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
  overflow: hidden;
`;

const ServiceTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.75rem;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;

const ServiceMain = styled.div`
  display: flex;
  gap: 1.25rem;
  flex: 1;
`;

const ServiceIcon = styled.div`
  width: 3.25rem;
  height: 3.25rem;
  min-width: 3.25rem;
  border-radius: 50%;
  background: ${client.primaryColorLight};
  color: ${client.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
`;

const ServiceContent = styled.div`
  flex: 1;
`;

const ServiceTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
`;

const ServiceName = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
`;

const PriceBadge = styled.div`
  background: rgba(128, 0, 0, 0.08);
  color: ${client.primaryColor};
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 0.85rem;
`;

const MetaItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: #6b7280;
  font-size: 0.95rem;
`;

const ServiceDescription = styled.p`
  margin: 0;
  color: #4b5563;
  line-height: 1.8;
`;

const ToggleButton = styled.button`
  width: 3rem;
  height: 3rem;
  min-width: 3rem;
  border: none;
  border-radius: 50%;
  background: #faf7f4;
  color: ${client.primaryColor};
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease;

  &:hover {
    background: ${client.primaryColor};
    color: white;
    transform: translateY(-2px);
  }
`;

const AddonsSection = styled.div`
  border-top: 1px solid #f1ebe5;
  background: #fcfbfa;
  padding: 1.5rem 1.75rem 1.75rem;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;

const AddonsHeader = styled.h4`
  font-size: 1.05rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 1rem 0;
`;

const AddonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const AddonCard = styled.div`
  background: white;
  border: 1px solid #efe7df;
  border-radius: 1rem;
  padding: 1rem 1rem 1.1rem;
`;

const AddonTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

const AddonName = styled.h5`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: #1f2937;
`;

const AddonPrice = styled.div`
  color: ${client.primaryColor};
  font-weight: 700;
  white-space: nowrap;
`;

const AddonMeta = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: #6b7280;
  font-size: 0.92rem;
  margin-bottom: 0.65rem;
`;

const AddonDescription = styled.p`
  margin: 0;
  color: #4b5563;
  line-height: 1.7;
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
  background: ${client.primaryColorLight};
  color: black;
  padding: 0.75rem 2rem;
  border-radius: 0.375rem;
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background: ${client.primaryColor};
    color: white;
  }
`;
