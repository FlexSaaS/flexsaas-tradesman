import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { getClientConfig } from '../lib/getClientConfig';

// Dynamically retrieve the client-specific configuration
const projectConfig = getClientConfig();

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const location = useLocation();

  // Check if a project ID is passed in the location state (for deep-linking)
  useEffect(() => {
    const state = location.state as { selectedProjectId?: number };
    if (state?.selectedProjectId) {
      setSelectedProject(state.selectedProjectId);
      setCurrentImageIndex(0);
    }
  }, [location]);

  // Open modal for selected project
  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId);
    setCurrentImageIndex(0);
  };

  // Close modal
  const handleClose = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  // Show previous image in modal
  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  // Show next image in modal
  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const project = projectConfig.projects.find((p) => p.id === selectedProject);
    if (project) {
      setCurrentImageIndex((prev) => (prev < project.gallery.length - 1 ? prev + 1 : prev));
    }
  };

  return (
    <div className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section: Page Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{projectConfig.header.title}</h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {projectConfig.header.subtitle}
          </p>
        </div>

        {/* Section: Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectConfig.projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1 group relative cursor-pointer"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="relative h-56 sm:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Category label that animates on hover */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-[#FFD700] text-black px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ease-in-out transform 
                  group-hover:scale-150 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:bg-opacity-90
                  group-hover:rounded-md group-hover:px-4 group-hover:py-2 group-hover:text-base group-hover:font-bold group-hover:shadow-lg group-hover:z-10">
                  {project.category}
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Section: Modal Gallery */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 sm:p-4"
            >
              <div className="relative w-full max-w-3xl sm:max-w-6xl">
                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-[#FFD700] transition-colors z-50"
                >
                  <FontAwesomeIcon icon={faTimes} size="lg" />
                </button>

                {/* Modal: Project title */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-[#FFD700] text-center bg-black bg-opacity-75 px-4 sm:px-6 py-1 sm:py-2 rounded-full">
                    {projectConfig.projects.find(p => p.id === selectedProject)?.title}
                  </h2>
                </motion.div>

                {/* Modal: Image viewer */}
                <div className="relative">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    src={projectConfig.projects.find(p => p.id === selectedProject)?.gallery[currentImageIndex]}
                    alt="Project"
                    className="w-full max-h-[70vh] object-contain"
                  />

                  {/* Previous Image Button */}
                  <button
                    onClick={handlePrevImage}
                    className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#FFD700] transition-colors ${currentImageIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentImageIndex === 0}
                  >
                    <FontAwesomeIcon icon={faChevronLeft} size="2x" />
                  </button>

                  {/* Next Image Button */}
                  <button
                    onClick={handleNextImage}
                    className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#FFD700] transition-colors ${currentImageIndex === (projectConfig.projects.find(p => p.id === selectedProject)?.gallery.length || 0) - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentImageIndex === (projectConfig.projects.find(p => p.id === selectedProject)?.gallery.length || 0) - 1}
                  >
                    <FontAwesomeIcon icon={faChevronRight} size="2x" />
                  </button>

                  {/* Image index counter */}
                  <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm">
                    {currentImageIndex + 1} / {projectConfig.projects.find(p => p.id === selectedProject)?.gallery.length}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section: Call to Action */}
        <div className="mt-16 sm:mt-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{projectConfig.cta.title}</h2>
          <p className="text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
            {projectConfig.cta.subtitle}
          </p>
          <Link
            to={projectConfig.cta.link}
            className="bg-[#FFD700] text-black px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg font-semibold hover:bg-[#E6C200] transition-colors inline-block"
          >
            {projectConfig.cta.buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
