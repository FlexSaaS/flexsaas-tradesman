import {
  faFire,
  faStar,
  faTag,
  faArrowRight,
  faShoppingCart,
  faChevronLeft,
  faChevronRight,
  faXmark,
  faExpand,
  faPlay,
  faPause,
  faScrewdriverWrench,
  faContactCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { getClientConfig } from "../lib/getClientConfig";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

const client = getClientConfig();

type ProductMedia = {
  url: string;
  description: string;
};
function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState<{ [key: number]: boolean }>({});
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const calculateSavings = (originalPrice: number, currentPrice: number) => {
    const savings = originalPrice - currentPrice;
    const percentage = Math.round((savings / originalPrice) * 100);
    return { amount: savings, percentage };
  };

  // Handle modal close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProduct(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Handle keyboard navigation in modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProduct) return;

      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === " ") {
        // Space bar to play/pause current video
        const currentMedia = selectedProduct.images[currentImageIndex];
        if (isVideo(currentMedia)) {
          handleVideoPlay(currentImageIndex);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProduct, currentImageIndex]);

  // Auto-play videos when they become active
  useEffect(() => {
    if (selectedProduct) {
      const currentMedia = selectedProduct.images[currentImageIndex];
      if (isVideo(currentMedia)) {
        const video = videoRefs.current[currentImageIndex];
        if (video) {
          video.play().catch(console.error); // Auto-play the video
          setIsVideoPlaying((prev) => ({ ...prev, [currentImageIndex]: true }));
        }
      } else {
        // Pause all other videos when showing an image
        Object.keys(videoRefs.current).forEach((index) => {
          const videoIndex = Number(index);
          if (videoIndex !== currentImageIndex && videoRefs.current[videoIndex]) {
            videoRefs.current[videoIndex]!.pause();
            setIsVideoPlaying((prev) => ({ ...prev, [videoIndex]: false }));
          }
        });
      }
    }
  }, [currentImageIndex, selectedProduct]);

  // Pause videos when closing modal
  useEffect(() => {
    if (!selectedProduct) {
      Object.values(videoRefs.current).forEach((video) => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
      videoRefs.current = {};
      setIsVideoPlaying({});
    }
  }, [selectedProduct]);

  // Handle drag for image navigation
  const dragStartX = useRef(0);
  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    const diff = e.clientX - dragStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) prevImage();
      else nextImage();
    }
  };

  const nextImage = () => {
    if (!selectedProduct) return;

    setCurrentImageIndex((prev) => (prev + 1) % selectedProduct.images.length);
  };

  const prevImage = () => {
    if (!selectedProduct) return;

    setCurrentImageIndex((prev) => (prev - 1 + selectedProduct.images.length) % selectedProduct.images.length);
  };

  // Check if media is a video
  const isVideo = (media: ProductMedia) => {
    const url = media.url.toLowerCase();
    return url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".ogg") || url.includes("video");
  };

  // Handle video play/pause
  const handleVideoPlay = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video
          .play()
          .then(() => {
            setIsVideoPlaying((prev) => ({ ...prev, [index]: true }));
          })
          .catch(console.error);
      } else {
        video.pause();
        setIsVideoPlaying((prev) => ({ ...prev, [index]: false }));
      }
    }
  };

  // Handle video ended event to restart playback (for infinite loop)
  const handleVideoEnded = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.currentTime = 0;
      video.play().catch(console.error);
    }
  };

  // Set up video ref
  const setVideoRef = (index: number, element: HTMLVideoElement | null) => {
    videoRefs.current[index] = element;
  };

  const handleContactUs = () => {
    navigate("/contact");
  };

  return (
    <FeaturedItemsContainer>
      <SectionHeader>
        <div>
          <SectionTitle>{client.featuredItems?.title}</SectionTitle>
          <SectionSubtitle>{client.featuredItems?.subtitle}</SectionSubtitle>
        </div>
        {client.products && client.products.length > 0 && (
          <ViewAllButton to="/products">
            View All <FontAwesomeIcon icon={faArrowRight} />
          </ViewAllButton>
        )}
      </SectionHeader>

      <ProductsGrid>
        {client.featuredItems?.products.map((product: any) => {
          const savings = calculateSavings(product.originalPrice, product.price);
          return (
            <ProductCard key={product.id}>
              <ProductImageContainer
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={() => {
                  setSelectedProduct(product);
                  setCurrentImageIndex(0);
                }}>
                <ProductImage $imageUrl={product.image}>
                  <Badge style={{ display: "none" }}>
                    <FontAwesomeIcon icon={faFire} /> Best seller
                  </Badge>
                  <StockIndicator stock={product.stock}>
                    {product.stock > 10 ? "In Stock" : product.stock > 0 ? `Low Stock (${product.stock})` : "Out of Stock"}
                  </StockIndicator>

                  {/* Hover Overlay */}
                  <ImageOverlay $visible={isHovering}>
                    <OverlayContent>
                      <FontAwesomeIcon icon={faExpand} size="2x" />
                      <OverlayText>Click to View Media</OverlayText>
                    </OverlayContent>
                  </ImageOverlay>
                </ProductImage>
              </ProductImageContainer>

              <ProductDetails>
                <ProductName>{product.name}</ProductName>

                <Rating style={{ display: "none" }}>
                  <Stars>
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} color={i < Math.round(product.rating) ? "#FFC107" : "#ddd"} />
                    ))}
                  </Stars>
                  ({product.rating.toFixed(1)})
                </Rating>

                <PriceContainer style={{ display: "none" }}>
                  <CurrentPrice>
                    {client.currencySymbol}
                    {product.price.toFixed(2)}
                  </CurrentPrice>
                  <OriginalPrice style={{ display: "none" }}>
                    {client.currencySymbol}
                    {product.originalPrice.toFixed(2)}
                  </OriginalPrice>
                  <Savings style={{ display: "none" }}>
                    <FontAwesomeIcon icon={faTag} /> Save {client.currencySymbol}
                    {savings.amount.toFixed(2)} ({savings.percentage}%)
                  </Savings>
                </PriceContainer>

                <PriceRange style={{ display: "none" }}>
                  Price range: {client.currencySymbol}
                  {product.priceRange.min.toFixed(2)} - {client.currencySymbol}
                  {product.priceRange.max.toFixed(2)}
                </PriceRange>

                <AddToCartButton disabled={product.stock === 0} style={{ display: "none" }}>
                  <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                </AddToCartButton>

                <AddToCartButton
                  disabled={product.stock === 0}
                  onClick={() => {
                    setSelectedProduct(product);
                    setCurrentImageIndex(0);
                  }}>
                  <FontAwesomeIcon icon={faScrewdriverWrench} /> View Details
                </AddToCartButton>
              </ProductDetails>
            </ProductCard>
          );
        })}
      </ProductsGrid>

      {/* Image/Video Modal */}
      {selectedProduct && (
        <ImageModal
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedProduct(null);
          }}>
          <ModalContent onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
            <ModalHeader>
              <ProductInfo>
                <ModalProductName>{selectedProduct.name}</ModalProductName>
                <ModalPrice style={{ display: "none" }}>
                  {client.currencySymbol}
                  {selectedProduct.price.toFixed(2)}
                </ModalPrice>
                <ModalDescription>{selectedProduct.images?.[currentImageIndex]?.description ?? "No description available."}</ModalDescription>
              </ProductInfo>
              <CloseButton onClick={() => setSelectedProduct(null)}>
                <FontAwesomeIcon icon={faXmark} />
              </CloseButton>
            </ModalHeader>

            <ImageContainer>
              {isVideo(selectedProduct.images[currentImageIndex]) ? (
                <VideoContainer>
                  <ModalVideo
                    ref={(el) => setVideoRef(currentImageIndex, el)}
                    src={selectedProduct.images[currentImageIndex].url}
                    loop
                    muted
                    autoPlay
                    playsInline
                    onEnded={() => handleVideoEnded(currentImageIndex)}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVideoPlay(currentImageIndex);
                    }}
                  />
                  <VideoPlayOverlay
                    $isPlaying={isVideoPlaying[currentImageIndex]}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVideoPlay(currentImageIndex);
                    }}>
                    <FontAwesomeIcon icon={isVideoPlaying[currentImageIndex] ? faPause : faPlay} size="2x" />
                  </VideoPlayOverlay>
                </VideoContainer>
              ) : (
                <ModalImage src={selectedProduct.images[currentImageIndex].url} alt={selectedProduct.name} />
              )}

              {/* Navigation Arrows */}
              <NavButton $position="left" onClick={prevImage}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </NavButton>
              <NavButton $position="right" onClick={nextImage}>
                <FontAwesomeIcon icon={faChevronRight} />
              </NavButton>

              {/* Media Type Indicator */}
              <MediaTypeIndicator>
                {isVideo(selectedProduct.images[currentImageIndex]) ? (
                  <MediaTypeBadge $type="video">
                    <FontAwesomeIcon icon={isVideoPlaying[currentImageIndex] ? faPause : faPlay} />
                    {isVideoPlaying[currentImageIndex] ? "PLAYING" : "VIDEO"}
                  </MediaTypeBadge>
                ) : (
                  <MediaTypeBadge $type="image">IMAGE</MediaTypeBadge>
                )}
              </MediaTypeIndicator>

              {/* Image Counter */}
              <ImageCounter>
                {currentImageIndex + 1} / {selectedProduct.images.length}
              </ImageCounter>
            </ImageContainer>

            {/* Image Indicators */}
            <ImageIndicators>
              {selectedProduct.images.map((media: ProductMedia, i: number) => (
                <IndicatorDot
                  key={i}
                  $active={i === currentImageIndex}
                  $type={isVideo(media) ? "video" : "image"}
                  $isPlaying={isVideoPlaying[i]}
                  onClick={() => setCurrentImageIndex(i)}
                />
              ))}
            </ImageIndicators>

            {/* Thumbnail Strip */}
            <ThumbnailStrip>
              {selectedProduct.images.map((media: ProductMedia, i: number) => (
                <Thumbnail
                  key={i}
                  $src={isVideo(media) ? getVideoThumbnail(media.url) : media.url}
                  $active={i === currentImageIndex}
                  $type={isVideo(media) ? "video" : "image"}
                  onClick={() => setCurrentImageIndex(i)}>
                  {isVideo(media) && (
                    <VideoThumbnailOverlay>
                      <FontAwesomeIcon icon={isVideoPlaying[i] ? faPause : faPlay} size={isVideoPlaying[i] ? "xs" : "sm"} />
                    </VideoThumbnailOverlay>
                  )}
                </Thumbnail>
              ))}
            </ThumbnailStrip>

            <ModalActions>
              <ModalAddToCartButton disabled={selectedProduct.stock === 0} style={{ display: "none" }}>
                <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart - {client.currencySymbol}
                {selectedProduct.price.toFixed(2)}
              </ModalAddToCartButton>
              <ModalAddToCartButton onClick={handleContactUs}>
                <FontAwesomeIcon icon={faContactCard} /> Contact us
              </ModalAddToCartButton>
            </ModalActions>
          </ModalContent>
        </ImageModal>
      )}
    </FeaturedItemsContainer>
  );
}

// Helper function to get video thumbnail (you might want to replace this with actual thumbnails)
const getVideoThumbnail = (videoUrl: string) => {
  // In a real app, you would have actual thumbnail images for videos
  // For demo purposes, we'll use a placeholder or extract from video URL
  return videoUrl.replace(".mp4", ".jpg") || videoUrl.replace(".webm", ".jpg") || "/video-thumbnail-placeholder.jpg";
};

export default FeaturedProducts;

/* ---------------- Styled Components ---------------- */
const FeaturedItemsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${client.primaryColor};
  margin-bottom: 0.5rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const ViewAllButton = styled(Link)`
  background-color: ${client.primaryColor};
  color: white;
  text-decoration: none;
  padding: 0.6rem 1rem;
  border-radius: 4px;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${client.primaryColorLight || "#0057a0"};
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.45);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
`;

const ProductImage = styled.div<{ $imageUrl: string }>`
  height: 350px;
  background-image: url(${(props) => props.$imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  transition: transform 0.3s ease;

  ${ProductImageContainer}:hover & {
    transform: scale(1.05);
  }
`;

const ModalDescription = styled.p`
  margin-top: 0.5rem;
  font-size: 1.1rem;
  color: #555;
`; 


const ImageOverlay = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

const OverlayContent = styled.div`
  text-align: center;
  color: white;
`;

const OverlayText = styled.div`
  margin-top: 0.5rem;
  font-weight: bold;
  font-size: 0.9rem;
`;

const Badge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${client.primaryColor};
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  z-index: 2;
`;

const StockIndicator = styled.div<{ stock: number }>`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: ${(props) => (props.stock > 10 ? "#4CAF50" : props.stock > 0 ? "#9e7703ff" : "#F44336")};
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  z-index: 2;
`;

const ProductDetails = styled.div`
  padding: 1.5rem;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.9rem;
  color: #333;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;
  gap: 1rem;
`;

const CurrentPrice = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${client.primaryColor};
`;

const OriginalPrice = styled.span`
  font-size: 1rem;
  color: #999;
  text-decoration: line-through;
`;

const Savings = styled.span`
  font-size: 0.9rem;
  color: #4caf50;
`;

const PriceRange = styled.div`
  font-size: 0.9rem;
  color: #000;
  margin-bottom: 0.9rem;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Stars = styled.div`
  color: #ffc107;
  margin-right: 0.5rem;
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: ${client.primaryColor};
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${client.primaryColorLight};
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

/* ---------------- Modal Styles ---------------- */
const ImageModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 2rem;
`;

const ModalContent = styled.div`
  position: relative;
  background: #fff;
  border-radius: 12px;
  width: 100vw;
  max-height: 95vh;
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ModalProductName = styled.h2`
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const ModalPrice = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${client.primaryColor};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: #f5f5f5;
    color: #333;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  padding: 1rem;
`;

const ModalImage = styled.img`
  width: 100%;
  max-height: 400px;
  border-radius: 8px;
  object-fit: contain;
  user-select: none;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: 400px;
  border-radius: 8px;
  overflow: hidden;
  // background: #000;
`;

const ModalVideo = styled.video`
  width: 100%;
  max-height: 400px;
  border-radius: 8px;
  object-fit: contain;
  display: block;
  cursor: pointer;
`;

const VideoPlayOverlay = styled.div<{ $isPlaying: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, ${(props) => (props.$isPlaying ? 0 : 0.3)});
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  opacity: ${(props) => (props.$isPlaying ? 0 : 1)};
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const MediaTypeIndicator = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
`;

const MediaTypeBadge = styled.span<{ $type: "image" | "video" }>`
  background: ${(props) => (props.$type === "video" ? "#ff4757" : client.primaryColor)};
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
`;

const NavButton = styled.button<{ $position: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.$position === "left" ? "left: 1rem;" : "right: 1rem;")}
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  color: #333;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: ${client.primaryColor};
    color: white;
    transform: translateY(-50%) scale(1.1);
  }
`;

const ImageCounter = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const ImageIndicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 1rem;
`;

const IndicatorDot = styled.div<{ $active: boolean; $type: "image" | "video"; $isPlaying?: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(p) => (p.$active ? (p.$type === "video" ? "#ff4757" : client.primaryColor) : "#ddd")};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: ${(p) => (p.$type === "video" ? "#ff4757" : client.primaryColor)};
    transform: scale(1.2);
  }

  ${(p) =>
    p.$type === "video" &&
    !p.$active &&
    `
    &::after {
      content: '▶';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 6px;
      color: #666;
    }
  `}

  ${(p) =>
    p.$type === "video" &&
    p.$isPlaying &&
    `
    animation: pulse 1.5s infinite;

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.2); }
      100% { transform: scale(1); }
    }
  `}
`;

const ThumbnailStrip = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 1rem 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Thumbnail = styled.div<{ $src: string; $active: boolean; $type: "image" | "video" }>`
  width: 60px;
  height: 60px;
  background-image: url(${(props) => props.$src});
  background-size: cover;
  background-position: center;
  border-radius: 6px;
  cursor: pointer;
  border: 3px solid ${(props) => (props.$active ? (props.$type === "video" ? "#ff4757" : client.primaryColor) : "transparent")};
  opacity: ${(props) => (props.$active ? 1 : 0.7)};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const VideoThumbnailOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const ModalActions = styled.div`
  padding: 1.5rem;
  border-top: 1px solid #eee;
  text-align: center;
`;

const ModalAddToCartButton = styled.button`
  padding: 1rem 2rem;
  background-color: ${client.primaryColor};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1.1rem;

  &:hover {
    background-color: ${client.primaryColorLight};
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
