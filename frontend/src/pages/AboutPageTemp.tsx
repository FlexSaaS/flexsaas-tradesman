import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faUsers, faClock, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
//import SEOHead from '../components/SEOHead'; will create an SEOHead if need requested by the client.
import { getClientConfig } from '../lib/getClientConfig';

// Types for styled-components props
interface ColorProps {
  $primaryColor: string;
}

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
  box-shadow: 0 10px 24px 0 rgba(0,0,0,0.10);
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

const ValueIcon = styled.div<ColorProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  svg {
    width: 3rem;
    height: 3rem;
    color: ${({ $primaryColor }) => $primaryColor};
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
  box-shadow: 0 4px 16px rgba(0,0,0,0.10);
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

const AboutPageTemp = () => {
  const config = getClientConfig();
  const primaryColor = config.primaryColor || "#FFD700";

  const values = [
  {
    icon: <FontAwesomeIcon icon={faShieldAlt} size="3x" color={primaryColor} />,
    title: "Quality",
    description: "We never compromise on quality, using only the finest materials and proven construction methods."
  },
  {
    icon: <FontAwesomeIcon icon={faUsers} size="3x" color={primaryColor} />,
    title: "Trust",
    description: "Building lasting relationships with our clients through transparency and reliability."
  },
  {
    icon: <FontAwesomeIcon icon={faClock} size="3x" color={primaryColor} />,
    title: "Timeliness",
    description: "We respect deadlines and deliver projects on schedule without compromising quality."
  },
  {
    icon: <FontAwesomeIcon icon={faThumbsUp} size="3x" color={primaryColor} />,
    title: "Customer Satisfaction",
    description: "Your satisfaction is our ultimate goal, and we go above and beyond to achieve it."
  }
];

  return (
    <>
      {/* <SEOHead 
        title={config.about?.seoTitle || "About " + config.name}
        description={config.about?.seoDescription || config.about?.description}
        keywords={config.about?.seoKeywords}
        url={config.about?.seoUrl || "/about"}
      /> */}
      <PageWrapper>
        <Container>
          {/* Header Section */}
          <Header>
            <Title>{config.about?.title || "About Us"}</Title>
            <Subtitle>
              {config.about?.subtitle ||
                "With over 9 years of experience in the construction industry, we've built our reputation on quality, reliability, and exceptional customer service."}
            </Subtitle>
          </Header>

          {/* Story Section */}
          <StoryGrid>
            <div>
              <StoryImage 
                src={config.about?.mainImage || "/printable resoultion-01.jpg"}
                alt={config.about?.mainImageAlt || "Construction Team"}
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
            <StoryText>
              <h2>{config.about?.storyTitle || "Our Story"}</h2>
              <p>
                {config.about?.story1 ||
                  "Founded in 2016 by Mr Lucian Picior, XPro Build LTD has grown from a small local contractor to one of the region's most trusted construction companies. Our journey has been built on a foundation of excellence, integrity, and dedication to our craft."}
              </p>
              <p>
                {config.about?.story2 ||
                  "With a team of highly skilled professionals and a commitment to using the latest construction technologies, we've successfully completed hundreds of projects, from small renovations to large-scale commercial builds."}
              </p>
              <p>
                {config.about?.story3 ||
                  "Our mission is simple: to transform our clients' visions into reality while exceeding expectations in quality, safety, and service."}
              </p>
            </StoryText>
          </StoryGrid>

          {/* Values Section */}
          <ValuesSection>
            <ValuesTitle>Our Values</ValuesTitle>
            <ValuesGrid>
              {values.map((value, idx) => (
                <ValueCard key={idx}>
                  <ValueIcon $primaryColor={primaryColor}>{value.icon}</ValueIcon>
                  <ValueTitle>{value.title}</ValueTitle>
                  <ValueDesc>{value.description}</ValueDesc>
                </ValueCard>
              ))}
            </ValuesGrid>
          </ValuesSection>

          {/* Team Section */}
          <TeamSection>
            <TeamTitle>Meet The Founder</TeamTitle>
            <div className="flex flex-col items-center">
              <FounderImage 
                src={config.about?.founderImage || "/CEOB.jpeg"}
                alt={config.about?.founderName || "Lucian Picior"}
                loading="lazy"
                width="192"
                height="192"
              />
              <FounderName>{config.about?.founderName || "Lucian Picior"}</FounderName>
              <FounderRole>{config.about?.founderRole || "Founder & CEO"}</FounderRole>
              <FounderBio>
                <p>
                  {config.about?.founderBio1 ||
                    "With over 15 years of experience in the construction industry, Lucian Picior has established himself as a visionary leader in London's construction sector. His journey began as a skilled craftsman, where he developed a deep understanding of construction fundamentals and an unwavering commitment to quality."}
                </p>
                <p>
                  {config.about?.founderBio2 ||
                    "In 2016, driven by his passion for excellence and innovative construction solutions, Lucian founded XPro Build. Under his leadership, the company has grown from handling small residential projects to managing complex commercial developments, all while maintaining the same attention to detail and commitment to quality that defined its beginnings."}
                </p>
                <p>
                  {config.about?.founderBio3 ||
                    "Lucian's hands-on approach and dedication to client satisfaction have been instrumental in building XPro Build's reputation as one of London's most trusted construction companies. He personally oversees major projects and maintains direct relationships with clients, ensuring that every project meets the high standards that XPro Build is known for."}
                </p>
              </FounderBio>
            </div>
          </TeamSection>
        </Container>
      </PageWrapper>
    </>
  );
};

export default AboutPageTemp;