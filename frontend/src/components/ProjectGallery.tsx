import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { getClientConfig } from '../lib/getClientConfig';

interface Project {
  id: number;
  title: string;
  gallery: string[];
}

const client = getClientConfig();

interface ProjectGalleryProps {
  project: Project | null;
  onClose: () => void;
  currentImageIndex: number;
  onPrevImage: (e: React.MouseEvent) => void;
  onNextImage: (e: React.MouseEvent) => void;
}


const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  project,
  onClose,
  currentImageIndex,
  onPrevImage,
  onNextImage
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <GalleryOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <GalleryContainer>
          <CloseButton onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} size="xl" />
          </CloseButton>
          
          <TitleContainer
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Title>{project.title}</Title>
          </TitleContainer>
          
          <div style={{ position: 'relative' }}>
            <GalleryImage
              key={currentImageIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              src={project.gallery[currentImageIndex]}
              alt="Project"
            />
            
            <PrevButton
              onClick={onPrevImage}
              disabled={currentImageIndex === 0}
            >
              <FontAwesomeIcon icon={faChevronLeft} size="2x" />
            </PrevButton>
            
            <NextButton
              onClick={onNextImage}
              disabled={currentImageIndex === project.gallery.length - 1}
            >
              <FontAwesomeIcon icon={faChevronRight} size="2x" />
            </NextButton>

            <ImageCounter>
              {currentImageIndex + 1} / {project.gallery.length}
            </ImageCounter>
          </div>
        </GalleryContainer>
      </GalleryOverlay>
    </AnimatePresence>
  );
};

export default ProjectGallery;

// Styled components
const GalleryOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const GalleryContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 80rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: white;
  transition: color 0.3s;
  z-index: 50;
  
  &:hover {
    color: ${client.secondaryColor};
  }
`;

const TitleContainer = styled(motion.div)`
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${client.primaryColor};
  text-align: center;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
`;

const GalleryImage = styled(motion.img)`
  width: 100%;
  height: 80vh;
  object-fit: contain;
`;

const NavButton = styled.button<{ disabled?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  transition: color 0.3s;
  opacity: ${props => props.disabled ? 0.5 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  
  &:hover {
    color: ${client.secondaryColor};
  }
`;

const PrevButton = styled(NavButton)`
  left: 1rem;
`;

const NextButton = styled(NavButton)`
  right: 1rem;
`;

const ImageCounter = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
`;