import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { getClientConfig } from '../lib/getClientConfig';
import ProjectGallery from '../components/ProjectGallery';
// import RatingsSection from '../../components/RatingsSection';


const client = getClientConfig();

const HomePage = () => {
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
    const project = client.projects.find((p) => p.id === selectedProject);
    if (project) {
      setCurrentImageIndex((prev) => (prev < project.gallery.length - 1 ? prev + 1 : prev));
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <HeroTitle>Building Your Vision with Precision</HeroTitle>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <HeroSubtitle>
                Transform your space with XPro Build's expert construction services. 
                We bring your dreams to life with quality craftsmanship and attention to detail.
              </HeroSubtitle>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ButtonGroup>
                <PrimaryButton color={client.primaryColor} hoverColor={client.primaryColorLight} to="/contact">
                  Get in Touch <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '0.5rem' }} />
                </PrimaryButton>
                <SecondaryButton to="/services">
                  Our Services
                </SecondaryButton>
              </ButtonGroup>
            </motion.div>
          </div>
        </HeroContent>
      </HeroSection>

      {/* Recent Projects Preview */}
      <SectionContainer>
        <InnerContainer>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
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
                    delay: index * 0.2
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
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
            style={{ textAlign: 'center' }}
          >
            <ViewAllLink color={client.primaryColor} hoverColor={client.primaryColorLight} to="/projects">
              View All Projects <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '0.5rem' }} />
            </ViewAllLink>
          </motion.div>
        </InnerContainer>
      </SectionContainer>

      {/* Features Section */}
      <FeaturesSection>
        <InnerContainer>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader>
              <SectionTitle>Why Choose XPro Build?</SectionTitle>
              <SectionSubtitle>We deliver excellence in every project</SectionSubtitle>
            </SectionHeader>
          </motion.div>
          
          {/* Mobile View - Grid */}
          <FeaturesGrid>
            {client.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard>
                <FeatureIcon color={client.primaryColor}><FontAwesomeIcon icon={feature.icon} /></FeatureIcon>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureCard>
              </motion.div>
            ))}
          </FeaturesGrid>

          {/* Desktop View - Infinite Carousel */}
          <FeaturesCarousel>
            <CarouselTrack>
              {[...client.features, ...client.features].map((feature, index) => (
                <CarouselItem key={index}>
                 <FeatureIcon color={client.primaryColor}><FontAwesomeIcon icon={feature.icon} /></FeatureIcon>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </CarouselItem>
              ))}
            </CarouselTrack>
          </FeaturesCarousel>
        </InnerContainer>
      </FeaturesSection>

      {/* Ratings Section */}
      {/* <RatingsSection /> */}

      {/* Project Gallery Modal */}
      <ProjectGallery
        project={client.projects.find(p => p.id === selectedProject) || null}
        onClose={handleClose}
        currentImageIndex={currentImageIndex}
        onPrevImage={handlePrevImage}
        onNextImage={handleNextImage}
      />
    </div>
  );
};

export default HomePage;


// Styled Components
const HeroSection = styled.div`
  position: relative;
  height: 90vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/homeimage.png');
  background-size: cover;
  background-position: center;
`;

const HeroContent = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 1rem;
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
  margin-bottom: 2rem;
  color: white;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  
  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

const PrimaryButton = styled(Link)<{ color: string, hoverColor: string }>`
  background-color: ${({ color }) => color};
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.2s;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
    transform: scale(1.05);
    color: black;
  }
  
  @media (min-width: 768px) {
    padding: 0.75rem 2rem;
    font-size: 1.125rem;
  }
`;

const ViewAllLink = styled(Link)<{ color: string, hoverColor: string }>`
  display: inline-flex;
  align-items: center;
  color:${({ color }) => color};
  font-weight: 600;
  margin-top: 3rem;
  text-align: center;
  
  &:hover {
    color:${({ hoverColor }) => hoverColor};
    transform: scale(1.05);
  }
`;

const FeatureCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  text-align: center;
`;

const FeatureIcon = styled.div<{ color: string }>`
  color: ${({ color }) => color};
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
  background-color: transparent;
  border: 2px solid white;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s;
  
  &:hover {
    background-color: white;
    color: black;
  }
  
  @media (min-width: 768px) {
    padding: 0.75rem 2rem;
    font-size: 1.125rem;
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
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
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
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  text-align: center;
  transition: all 0.3s;
  
  &:hover {
    transform: scale(1.05);
  }
`;
