import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { getClientConfig } from "../lib/getClientConfig";

const client = getClientConfig();

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { selectedProjectId?: number };
    if (state?.selectedProjectId) {
      setSelectedProject(state.selectedProjectId);
      setCurrentImageIndex(0);
    }
  }, [location]);

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
      setCurrentImageIndex((prev) =>
        prev < project.gallery.length - 1 ? prev + 1 : prev
      );
    }
  };

  return (
    <PageWrapper>
      <Container>
        {/* Section: Page Header */}
        <Header>
          <Title>{client.header.title}</Title>
          <Subtitle>{client.header.subtitle}</Subtitle>
        </Header>

        {/* Section: Project Grid */}
        <Grid>
          {client.projects.map((project) => (
            <ProjectCard
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
            >
              <CardImageWrapper>
                <CardImage src={project.image} alt={project.title} />
                <CategoryLabel>{project.category}</CategoryLabel>
              </CardImageWrapper>
              <CardContent>
                <CardTitle>{project.title}</CardTitle>
                <CardDesc>{project.description}</CardDesc>
              </CardContent>
            </ProjectCard>
          ))}
        </Grid>

        {/* Section: Modal Gallery */}
        <AnimatePresence>
          {selectedProject !== null && (
            <ModalOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            >
              <ModalContent>
                <CloseButton onClick={handleClose}>
                  <FontAwesomeIcon icon={faTimes} size="lg" />
                </CloseButton>
                <ModalTitle
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2>
                    {
                      client.projects.find((p) => p.id === selectedProject)
                        ?.title
                    }
                  </h2>
                </ModalTitle>
                <ModalImageWrapper>
                  <ModalImage
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    src={
                      client.projects.find((p) => p.id === selectedProject)
                        ?.gallery[currentImageIndex]
                    }
                    alt="Project"
                  />
                  <NavButton
                    className="left"
                    onClick={handlePrevImage}
                    disabled={currentImageIndex === 0}
                  >
                    <FontAwesomeIcon icon={faChevronLeft} size="2x" />
                  </NavButton>
                  <NavButton
                    className="right"
                    onClick={handleNextImage}
                    disabled={
                      currentImageIndex ===
                      (client.projects.find((p) => p.id === selectedProject)
                        ?.gallery.length || 0) -
                        1
                    }
                  >
                    <FontAwesomeIcon icon={faChevronRight} size="2x" />
                  </NavButton>
                  <ImageCounter>
                    {currentImageIndex + 1} /{" "}
                    {
                      client.projects.find((p) => p.id === selectedProject)
                        ?.gallery.length
                    }
                  </ImageCounter>
                </ModalImageWrapper>
              </ModalContent>
            </ModalOverlay>
          )}
        </AnimatePresence>

        {/* Section: Call to Action */}
        <CTASection>
          <CTATitle>{client.cta.title}</CTATitle>
          <CTASubtitle>{client.cta.subtitle}</CTASubtitle>
          <CTAButton to={client.cta.link}>{client.cta.buttonText}</CTAButton>
        </CTASection>
      </Container>
    </PageWrapper>
  );
}

export default ProjectsPage;

// Styled Components
// Default colour can be overidden by props with client specified config.
const PageWrapper = styled.div`
  padding: 4rem 0;
  background: #f9fafb;
  @media (min-width: 640px) {
    padding: 5rem 0;
  }
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
  margin-bottom: 3rem;
  @media (min-width: 640px) {
    margin-bottom: 4rem;
  }
`;
// Default colour can be overidden by props with client specified config.
const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
  @media (min-width: 640px) {
    font-size: 2.25rem;
  }
`;
// Default colour can be overidden by props with client specified config.
const Subtitle = styled.p`
  font-size: 1rem;
  color: #4b5563;
  max-width: 48rem;
  margin: 0 auto;
  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled.div`
  background: #fff;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s;
  cursor: pointer;
  position: relative;
  &:hover {
    transform: translateY(-0.25rem);
  }
`;

const CardImageWrapper = styled.div`
  position: relative;
  height: 14rem;
  @media (min-width: 640px) {
    height: 16rem;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CategoryLabel = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: ${client.primaryColor};
  color: #000;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.3s;
  z-index: 2;
  @media (min-width: 640px) {
    top: 1rem;
    right: 1rem;
    font-size: 0.875rem;
    padding: 0.25rem 1rem;
  }
  ${ProjectCard}:hover & {
    transform: scale(1.5) translate(-50%, -50%);
    left: 50%;
    top: 50%;
    background: ${client.primaryColorLight};
    border-radius: 0.375rem;
    font-size: 1rem;
    font-weight: 700;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    padding: 0.5rem 1.5rem;
  }
`;

const CardContent = styled.div`
  padding: 1rem;
  @media (min-width: 640px) {
    padding: 1.5rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;
// Default colour can be overidden by props with client specified config.
const CardDesc = styled.p`
  color: #4b5563;
  font-size: 0.875rem;
  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  @media (min-width: 640px) {
    padding: 1rem;
  }
`;

const ModalContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 48rem;
  @media (min-width: 640px) {
    max-width: 96rem;
  }
`;
// Default colour can be overidden by props with client specified config.
const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: #fff;
  transition: color 0.2s;
  z-index: 50;
  &:hover {
    color: #ffd700;
  }
  @media (min-width: 640px) {
    top: 1rem;
    right: 1rem;
  }
`;

const ModalTitle = styled(motion.div)`
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${client.primaryColor};
    text-align: center;
    background: rgba(0, 0, 0, 0.75);
    padding: 0.25rem 1.5rem;
    border-radius: 9999px;
    @media (min-width: 640px) {
      font-size: 1.5rem;
      padding: 0.5rem 2rem;
    }
  }
`;

const ModalImageWrapper = styled.div`
  position: relative;
`;

const ModalImage = styled(motion.img)`
  width: 100%;
  max-height: 70vh;
  object-fit: contain;
`;
// Default colour can be overidden by props with client specified config.
const NavButton = styled.button<{ disabled?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  transition: color 0.2s, opacity 0.2s;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  &:hover {
    color: #ffd700;
  }
  &.left {
    left: 0.5rem;
    @media (min-width: 640px) {
      left: 1rem;
    }
  }
  &.right {
    right: 0.5rem;
    @media (min-width: 640px) {
      right: 1rem;
    }
  }
`;

const ImageCounter = styled.div`
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.25rem 1rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  @media (min-width: 640px) {
    bottom: 1rem;
    font-size: 0.875rem;
    padding: 0.5rem 1.5rem;
  }
`;

const CTASection = styled.div`
  margin-top: 4rem;
  text-align: center;
  @media (min-width: 640px) {
    margin-top: 5rem;
  }
`;
// Default colour can be overidden by props with client specified config.
const CTATitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
  @media (min-width: 640px) {
    font-size: 1.875rem;
  }
`;
// Default colour can be overidden by props with client specified config.
const CTASubtitle = styled.p`
  color: #4b5563;
  margin-bottom: 1.5rem;
  max-width: 36rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.875rem;
  @media (min-width: 640px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const CTAButton = styled(Link)`
  background: ${client.primaryColor};
  color: #000;
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 600;
  transition: 0.2s;
  display: inline-block;
  &:hover {
    background: ${client.primaryColorLight};
  }
  @media (min-width: 640px) {
    padding: 0.75rem 2rem;
    font-size: 1.125rem;
  }
`;
