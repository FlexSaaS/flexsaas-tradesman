import React, { useEffect, useMemo, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { getClientConfig } from "../lib/getClientConfig";

const client = getClientConfig();

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  gallery: string[];
};

function ProjectsPage() {
  const location = useLocation();

  const projects = useMemo<Project[]>(() => client.projects || [], []);
  const isEthereal = client.name === "Ethereal Vista";
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImageLoaded, setModalImageLoaded] = useState(false);

  const preloadImage = useCallback((src: string) => {
    if (!src) return;
    const img = new Image();
    img.src = src;
  }, []);

  const preloadProjectGallery = useCallback(
    (project: Project) => {
      if (!project?.gallery?.length) return;
      project.gallery.forEach((src) => preloadImage(src));
    },
    [preloadImage],
  );

  useEffect(() => {
    const state = location.state as { selectedProjectId?: number } | null;

    if (state?.selectedProjectId) {
      const project = projects.find((p) => p.id === state.selectedProjectId) || null;

      if (project) {
        setSelectedProject(project);
        setCurrentImageIndex(0);
        setModalImageLoaded(false);
        preloadProjectGallery(project);
      }
    }
  }, [location, projects, preloadProjectGallery]);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }

      if (event.key === "ArrowLeft") {
        setModalImageLoaded(false);
        setCurrentImageIndex((prev) => Math.max(prev - 1, 0));
      }

      if (event.key === "ArrowRight") {
        setModalImageLoaded(false);
        setCurrentImageIndex((prev) => Math.min(prev + 1, selectedProject.gallery.length - 1));
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) return;

    const nextImage = selectedProject.gallery[currentImageIndex + 1];
    const prevImage = selectedProject.gallery[currentImageIndex - 1];

    if (nextImage) preloadImage(nextImage);
    if (prevImage) preloadImage(prevImage);
  }, [currentImageIndex, selectedProject, preloadImage]);

  const handleProjectClick = useCallback(
    (project: Project) => {
      setSelectedProject(project);
      setCurrentImageIndex(0);
      setModalImageLoaded(false);
      preloadProjectGallery(project);
    },
    [preloadProjectGallery],
  );

  const handleClose = useCallback(() => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setModalImageLoaded(false);
  }, []);

  const handlePrevImage = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setModalImageLoaded(false);
    setCurrentImageIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleNextImage = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!selectedProject) return;

      setModalImageLoaded(false);
      setCurrentImageIndex((prev) => Math.min(prev + 1, selectedProject.gallery.length - 1));
    },
    [selectedProject],
  );

  const currentImage = selectedProject?.gallery?.[currentImageIndex];

  if (!projects.length) {
    return null;
  }

  return (
    <PageWrapper>
      <Container>
        <Header>
          <Title>{client.header.title}</Title>
          <Subtitle>{client.header.subtitle}</Subtitle>
        </Header>

        <Grid>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              onClick={() => handleProjectClick(project)}
              onMouseEnter={() => preloadProjectGallery(project)}
              aria-label={`Open project ${project.title}`}>
              <CardImageWrapper>
                <CardImage src={project.image} alt={project.title} loading="lazy" />
                <CardOverlay />
                <CategoryLabel>{project.category}</CategoryLabel>
              </CardImageWrapper>

              <CardContent>
                <CardTitle>{project.title}</CardTitle>
                <CardDesc>{project.description}</CardDesc>
              </CardContent>
            </ProjectCard>
          ))}
        </Grid>

        <AnimatePresence>
          {selectedProject && (
            <ModalOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleClose}>
              <ModalShell
                as={motion.div}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.98 }}
                transition={{ duration: 0.22 }}
                onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                <CloseButton onClick={handleClose} aria-label="Close modal">
                  <FontAwesomeIcon icon={faTimes} />
                </CloseButton>

                <ModalHeader>
                  <ModalCategory>{selectedProject.category}</ModalCategory>
                  <ModalHeading>{selectedProject.title}</ModalHeading>
                  <ModalDescription>{selectedProject.description}</ModalDescription>
                </ModalHeader>

                <ModalImageSection>
                  <ModalImageFrame>
                    {!modalImageLoaded && <ImageSkeleton />}

                    <AnimatePresence mode="wait">
                      <AnimatedImage
                        key={`${selectedProject.id}-${currentImageIndex}`}
                        src={currentImage}
                        alt={`${selectedProject.title} ${currentImageIndex + 1}`}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: modalImageLoaded ? 1 : 0, x: 0 }}
                        exit={{ opacity: 0, x: -24 }}
                        transition={{ duration: 0.2 }}
                        onLoad={() => setModalImageLoaded(true)}
                      />
                    </AnimatePresence>

                    <NavButton
                      className="left"
                      onClick={handlePrevImage}
                      disabled={currentImageIndex === 0}
                      aria-label="Previous image"
                      type="button">
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </NavButton>

                    <NavButton
                      className="right"
                      onClick={handleNextImage}
                      disabled={currentImageIndex === selectedProject.gallery.length - 1}
                      aria-label="Next image"
                      type="button">
                      <FontAwesomeIcon icon={faChevronRight} />
                    </NavButton>

                    <ImageCounter>
                      {currentImageIndex + 1} / {selectedProject.gallery.length}
                    </ImageCounter>
                  </ModalImageFrame>
                </ModalImageSection>
              </ModalShell>
            </ModalOverlay>
          )}
        </AnimatePresence>

        <CTASection>
          <CTATitle>{client.cta.title}</CTATitle>
          <CTASubtitle>{client.cta.subtitle}</CTASubtitle>
          {isEthereal && (
            <CTALink href={client.cta.link} target="_blank" rel="noopener noreferrer">
              {client.cta.buttonText}
            </CTALink>
          )}
          {!isEthereal && <CTAButton to={client.cta.link}>{client.cta.buttonText}</CTAButton>}
        </CTASection>
      </Container>
    </PageWrapper>
  );
}

export default ProjectsPage;

const PageWrapper = styled.div`
  padding: 4rem 0;
  background: radial-gradient(circle at top, rgba(255, 255, 255, 0.9), rgba(249, 250, 251, 1)), #f9fafb;

  @media (min-width: 640px) {
    padding: 5rem 0;
  }
`;

const Container = styled.div`
  max-width: 82rem;
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

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
  @media (min-width: 640px) {
    font-size: 2.25rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #4b5563;
  max-width: 48rem;
  margin: 0 auto;
  @media (min-width: 640px) {
    font-size: 1.125rem;
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
  display: block;
  width: 100%;
  padding: 0;
  text-align: left;
  border: 1px solid rgba(17, 24, 39, 0.06);
  border-radius: 1.25rem;
  background: #ffffff;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 12px 30px rgba(17, 24, 39, 0.06);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 45px rgba(17, 24, 39, 0.12);
    border-color: rgba(17, 24, 39, 0.1);
  }
`;

const CardImageWrapper = styled.div`
  position: relative;
  height: 15rem;
  overflow: hidden;

  @media (min-width: 640px) {
    height: 16rem;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transform: scale(1);
  transition: transform 0.45s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(17, 24, 39, 0.18), rgba(17, 24, 39, 0.02) 40%, transparent 65%);
  pointer-events: none;
`;

const CategoryLabel = styled.div`
  position: absolute;
  top: 0.9rem;
  left: 0.9rem;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.92);
  color: #111827;
  padding: 0.45rem 0.85rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(8px);
`;

const CardContent = styled.div`
  padding: 1.1rem 1rem 1.25rem;

  @media (min-width: 640px) {
    padding: 1.25rem 1.25rem 1.4rem;
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 0.55rem;
  font-size: 1.125rem;
  line-height: 1.3;
  font-weight: 700;
  color: #111827;

  @media (min-width: 640px) {
    font-size: 1.2rem;
  }
`;

const CardDesc = styled.p`
  margin: 0;
  color: #6b7280;
  font-size: 0.95rem;
  line-height: 1.65;
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(8, 15, 26, 0.78);
  backdrop-filter: blur(10px);
`;

const ModalShell = styled.div`
  position: relative;
  width: min(100%, 1100px);
  max-height: 92vh;
  overflow: auto;
  border-radius: 1.5rem;
  background: #ffffff;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.28);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 20;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 9999px;
  background: rgba(17, 24, 39, 0.88);
  color: #ffffff;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    transform: scale(1.06);
    background: ${client.primaryColor};
  }
`;

const ModalHeader = styled.div`
  padding: 1.5rem 1.25rem 1rem;

  @media (min-width: 640px) {
    padding: 2rem 2rem 1.25rem;
  }
`;

const ModalCategory = styled.div`
  display: inline-flex;
  align-items: center;
  background: ${client.secondaryColor};
  color: #111827;
  padding: 0.45rem 0.9rem;
  border-radius: 9999px;
  font-size: 0.78rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const ModalHeading = styled.h2`
  margin: 0 0 0.6rem;
  color: #111827;
  font-size: 1.5rem;
  line-height: 1.2;
  font-weight: 800;

  @media (min-width: 640px) {
    font-size: 2rem;
  }
`;

const ModalDescription = styled.p`
  margin: 0;
  max-width: 52rem;
  color: #6b7280;
  font-size: 0.98rem;
  line-height: 1.7;

  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;

const ModalImageSection = styled.div`
  padding: 0 1rem 1rem;

  @media (min-width: 640px) {
    padding: 0 2rem 2rem;
  }
`;

const ModalImageFrame = styled.div`
  position: relative;
  min-height: 18rem;
  border-radius: 1.25rem;
  overflow: hidden;
  background: #f3f4f6;

  @media (min-width: 640px) {
    min-height: 28rem;
  }
`;

const AnimatedImage = styled(motion.img)`
  width: 100%;
  max-height: 72vh;
  display: block;
  object-fit: cover;
  background: #f3f4f6;
`;

const ImageSkeleton = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #f3f4f6 0%, #e5e7eb 50%, #f3f4f6 100%);
  background-size: 200% 100%;
  animation: shimmer 1.2s linear infinite;

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const NavButton = styled.button<{ disabled?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 12;
  width: 2.75rem;
  height: 2.75rem;
  border: none;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.94);
  color: #111827;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.45 : 1)};
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    transform: translateY(-50%) scale(${({ disabled }) => (disabled ? 1 : 1.05)});
    background: #ffffff;
  }

  &.left {
    left: 0.75rem;
  }

  &.right {
    right: 0.75rem;
  }

  @media (min-width: 640px) {
    width: 3rem;
    height: 3rem;

    &.left {
      left: 1rem;
    }

    &.right {
      right: 1rem;
    }
  }
`;

const ImageCounter = styled.div`
  position: absolute;
  bottom: 0.9rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 12;
  background: rgba(17, 24, 39, 0.72);
  color: #ffffff;
  padding: 0.45rem 0.95rem;
  border-radius: 9999px;
  font-size: 0.82rem;
  font-weight: 600;
  backdrop-filter: blur(8px);
`;

const CTASection = styled.div`
  margin-top: 4.5rem;
  padding: 2rem 1rem 0;
  text-align: center;

  @media (min-width: 640px) {
    margin-top: 5.5rem;
    padding-top: 2.5rem;
  }
`;

const CTATitle = styled.h2`
  margin: 0 0 1rem;
  font-size: 1.6rem;
  line-height: 1.2;
  font-weight: 800;
  color: #111827;

  @media (min-width: 640px) {
    font-size: 2rem;
  }
`;

const CTASubtitle = styled.p`
  max-width: 38rem;
  margin: 0 auto 1.75rem;
  color: #6b7280;
  font-size: 0.98rem;
  line-height: 1.7;

  @media (min-width: 640px) {
    margin-bottom: 2rem;
    font-size: 1rem;
  }
`;

const CTALink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: ${client.secondaryColor};
  color: #111827;
  padding: 0.85rem 1.5rem;
  border-radius: 9999px;
  font-size: 1rem;
  font-weight: 700;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    background: ${client.primaryColor};
    color: ${client.secondaryColor};
    box-shadow: 0 18px 32px rgba(0, 0, 0, 0.14);
  }

  @media (min-width: 640px) {
    padding: 0.95rem 1.9rem;
    font-size: 1.05rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: ${client.secondaryColor};
  color: #111827;
  padding: 0.85rem 1.5rem;
  border-radius: 9999px;
  font-size: 1rem;
  font-weight: 700;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    background: ${client.primaryColor};
    color: ${client.secondaryColor};
    box-shadow: 0 18px 32px rgba(0, 0, 0, 0.14);
  }

  @media (min-width: 640px) {
    padding: 0.95rem 1.9rem;
    font-size: 1.05rem;
  }
`;
