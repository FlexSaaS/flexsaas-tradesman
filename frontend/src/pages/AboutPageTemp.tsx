import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faUsers,
  faClock,
  faThumbsUp,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
//import SEOHead from '../components/SEOHead'; will create an SEOHead if need requested by the client.
import { getClientConfig } from "../lib/getClientConfig";

const client = getClientConfig();

function AboutPageTemp() {
  const { about } = client;

  return (
    <PageWrapper>
      <Container>
        {/* Header Section */}
        <Header>
          <Title>{about?.title}</Title>
          <Subtitle>{about?.subtitle}</Subtitle>
        </Header>

        {/* Story Section */}
        <StoryGrid>
          <div>
            <StoryImage
              src={about?.mainImage}
              alt={about?.mainImageAlt}
              loading="lazy"
              width="600"
              height="400"
            />
          </div>
          <StoryText>
            <h2>{about?.storyTitle}</h2>
            <p>{about?.story1}</p>
            <p>{about?.story2}</p>
            <p>{about?.story3}</p>
          </StoryText>
        </StoryGrid>

        {/* Values Section */}
        <ValuesSection>
          <ValuesTitle>Our Values</ValuesTitle>
          <ValuesGrid>
            {about?.values?.map((value, idx) => (
              <ValueCard key={idx}>
                <ValueIcon>
                  <FontAwesomeIcon
                    icon={value.icon as IconDefinition}
                    size="3x"
                  />
                </ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDesc>{value.description}</ValueDesc>
              </ValueCard>
            ))}
          </ValuesGrid>
        </ValuesSection>

        {/* Team Section */}
        <TeamSection>
          <TeamTitle>{about?.founderTitle}</TeamTitle>
          <div className="flex flex-col items-center">
            <FounderImage
              src={about?.founderImage}
              alt={about?.founderName}
              loading="lazy"
              width="192"
              height="192"
            />
            <FounderName>{about?.founderName}</FounderName>
            <FounderRole>{about?.founderRole}</FounderRole>
            <FounderBio>
              <p>{about?.founderBio1}</p>
              <p>{about?.founderBio2}</p>
              <p>{about?.founderBio3}</p>
            </FounderBio>
          </div>
        </TeamSection>
      </Container>
    </PageWrapper>
  );
}

export default AboutPageTemp;

const PageWrapper = styled.div`
  padding: 5rem 0;
  background: #f9fafb;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 80rem;
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

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 5rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StoryImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 1rem;
  box-shadow: 0 10px 24px 0 rgba(0, 0, 0, 0.1);
  display: block;
  margin: 0 auto;
`;

const StoryText = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1.5rem;
  }
  p {
    color: #4b5563;
    font-size: 1.125rem;
    margin-bottom: 1rem;
    line-height: 1.7;
  }
`;

const ValuesSection = styled.div`
  background: #f3f4f6;
  border-radius: 1rem;
  padding: 3rem;
  margin-bottom: 5rem;
`;

const ValuesTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  text-align: center;
  margin-bottom: 3rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ValueCard = styled.div`
  text-align: center;
`;

const ValueIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  svg {
    width: 3rem;
    height: 3rem;
    color: ${client.primaryColor};
  }
`;

const ValueTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ValueDesc = styled.p`
  color: #4b5563;
  font-size: 1rem;
`;

const TeamSection = styled.div`
  text-align: center;
  max-width: 48rem;
  margin: 0 auto;
`;

const TeamTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 3rem;
`;

const FounderImage = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 9999px;
  object-fit: cover;
  margin: 0 auto 1rem auto;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const FounderName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`;

const FounderRole = styled.p`
  color: #4b5563;
  margin-bottom: 1.5rem;
`;

const FounderBio = styled.div`
  text-align: left;
  margin: 0 auto;
  max-width: 40rem;
  p {
    color: #4b5563;
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 1.7;
  }
`;
