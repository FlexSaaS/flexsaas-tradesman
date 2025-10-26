import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { getClientConfig } from "../lib/getClientConfig";
import ProjectGallery from "../components/ProjectGallery";
import FeaturedProducts from "../components/FeaturedItems";

const client = getClientConfig();

function HomePage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId);
    setCurrentImageIndex(0);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!Array.isArray(client.projects)) return;

    const project = client.projects.find((p) => p.id === selectedProject);
    if (project && Array.isArray(project.gallery)) {
      setCurrentImageIndex((prev) => (prev < project.gallery.length - 1 ? prev + 1 : prev));
    }
  };

  return (
    <div>
      <HeroSection>
        <HeroContent>
          <HeroInner>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <HeroTitle>{client.hero.title}</HeroTitle>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <HeroSubtitle>{client.hero.subtitle}</HeroSubtitle>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <ButtonGroup>
                {/* either you offer booking or not */}
                {client.isBooking ? (
                  <PrimaryButton to="/contact">
                    BOOK <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "0.5rem" }} />
                  </PrimaryButton>
                ) : (
                  <PrimaryButton to="/contact">
                    CONTACT <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "0.5rem" }} />
                  </PrimaryButton>
                )}
                {/* either you offer services or sell products */}
                {client.services && client.services.length > 0 ? (
                  <SecondaryButton to="/services">SERVICES</SecondaryButton>
                ) : (
                  <SecondaryButton to="/products">OUR PRODUCTS</SecondaryButton>
                )}
              </ButtonGroup>
            </motion.div>
          </HeroInner>
        </HeroContent>
      </HeroSection>

      {Array.isArray(client.projects) && client.projects.length > 0 && (
        <SectionContainer>
          <InnerContainer>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionHeader>
                <SectionTitle>Recent Projects</SectionTitle>
                <SectionSubtitle>Take a look at our latest work</SectionSubtitle>
              </SectionHeader>
            </motion.div>

            <ProjectsGrid>
              {client.projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  animate={{
                    y: [0, -10, 0],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.2,
                    },
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}>
                  <ProjectCard onClick={() => handleProjectClick(project.id)}>
                    <ProjectImageWrapper>
                      <ProjectImage src={project.image} alt={project.title} />
                      <ProjectOverlay>
                        <ProjectTitle>{project.title}</ProjectTitle>
                      </ProjectOverlay>
                    </ProjectImageWrapper>
                  </ProjectCard>
                </motion.div>
              ))}
            </ProjectsGrid>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ textAlign: "center" }}>
              <ViewAllLink to="/projects">
                View All Projects <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "0.5rem" }} />
              </ViewAllLink>
            </motion.div>
          </InnerContainer>
        </SectionContainer>
      )}

      <FeaturedProducts />

      <FeaturesSection>
        <InnerContainer>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionHeader>
              <SectionTitle>{client.featuredTitle}</SectionTitle>
              <SectionSubtitle>{client.featuredSubTitle}</SectionSubtitle>
            </SectionHeader>
          </motion.div>

          <FeaturesGrid>
            {client.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <FeatureCard>
                  <FeatureIcon>
                    <FontAwesomeIcon icon={feature.icon} />
                  </FeatureIcon>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureCard>
              </motion.div>
            ))}
          </FeaturesGrid>

          <FeaturesCarousel>
            <CarouselTrack>
              {[...client.features, ...client.features].map((feature, index) => (
                <CarouselItem key={index}>
                  <FeatureIcon>
                    <FontAwesomeIcon icon={feature.icon} />
                  </FeatureIcon>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </CarouselItem>
              ))}
            </CarouselTrack>
          </FeaturesCarousel>
        </InnerContainer>
      </FeaturesSection>

      <ProjectGallery
        project={(client.projects && client.projects.find((p) => p.id === selectedProject)) || null}
        onClose={handleClose}
        currentImageIndex={currentImageIndex}
        onPrevImage={handlePrevImage}
        onNextImage={handleNextImage}
      />
    </div>
  );
}

export default HomePage;

const HeroSection = styled.div`
  position: relative;
  height: 90vh;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    ),
    url(${() => client.hero.backgroundImage});
  background-size: cover;
  background-position: center;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const HeroContent = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const HeroInner = styled.div`
  width: 40%;
  text-align: left;
  margin: 0;
`;

const HeroTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.125rem;
  margin-bottom: 4rem;
  color: white;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

const PrimaryButton = styled(Link)`
  background-color: ${client.primaryColor};
  color: #ffffff;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 450;
  transition: background-color 0.2s;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  letter-spacing: 0.1em;

  &:hover {
    background-color: ${client.primaryColorLight};
    transform: scale(1.05);
    color: black;
  }

  @media (min-width: 768px) {
    padding: 0.75rem 2rem;
    font-size: 1rem;
  }
`;

const ViewAllLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${client.primaryColor};
  font-weight: 600;
  margin-top: 3rem;
  text-align: center;
  text-decoration: none;

  &:hover {
    color: ${client.primaryColorLight};
    transform: scale(1.05);
  }
`;

const FeatureCard = styled.div`
  background-color: white;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  text-align: center;
`;

const FeatureIcon = styled.div`
  color: ${client.primaryColor};
  font-size: 3rem;
  margin: 0 auto;
`;

const FeatureTitle = styled.h3`
  margin-top: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
`;

const FeatureDescription = styled.p`
  margin-top: 0.5rem;
  color: #4a5568;
`;

const FeaturesCarousel = styled.div`
  position: relative;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const SecondaryButton = styled(Link)`
  background-color: white;
  color: #000000;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 450;
  transition: all 0.2s;
  letter-spacing: 0.1em;
  text-decoration: none;

  &:hover {
    background-color: black;
    color: white;
  }

  @media (min-width: 768px) {
    padding: 1.2rem 2rem;
    font-size: 1rem;
  }
`;

const SectionContainer = styled.div`
  padding: 5rem 0;
`;

const InnerContainer = styled.div`
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #1a202c;
`;

const SectionSubtitle = styled.p`
  margin-top: 1rem;
  font-size: 1.25rem;
  color: #4a5568;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled.div`
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  background-color: white;
`;

const ProjectImageWrapper = styled.div`
  position: relative;
  height: 16rem;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;

  ${ProjectCard}:hover & {
    transform: scale(1.1);
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  display: flex;
  align-items: flex-end;
`;

const ProjectTitle = styled.h3`
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  padding: 1.5rem;
`;

const FeaturesSection = styled.div`
  padding: 5rem 0;
  background-color: #f7fafc;
  overflow: hidden;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

const CarouselTrack = styled.div`
  display: flex;
  gap: 2rem;
  animation: scroll 30s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const CarouselItem = styled.div`
  flex: 0 0 20rem;
  background-color: white;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  text-align: center;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;
