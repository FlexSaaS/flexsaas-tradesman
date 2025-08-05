import { faFire, faStar, faTag, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { getClientConfig } from "../lib/getClientConfig";
import { Link } from "react-router-dom";

const client = getClientConfig();

function FeaturedProducts() {
  const calculateSavings = (originalPrice: number, currentPrice: number) => {
    const savings = originalPrice - currentPrice;
    const percentage = Math.round((savings / originalPrice) * 100);
    return { amount: savings, percentage };
  };

  return (
    <FeaturedItemsContainer>
      <SectionHeader>
        <div>
          <SectionTitle>{client.featuredItems?.title}</SectionTitle>
          <SectionSubtitle>{client.featuredItems?.subtitle}</SectionSubtitle>
        </div>
        <ViewAllButton to="/products">
          View All <FontAwesomeIcon icon={faArrowRight} />
        </ViewAllButton>
      </SectionHeader>

      <ProductsGrid>
        {client.featuredItems?.products.map((product) => {
          const savings = calculateSavings(product.originalPrice, product.price);

          return (
            <ProductCard key={product.id}>
              <ProductImage $imageUrl={product.image}>
                <Badge>
                  <FontAwesomeIcon icon={faFire} /> Best seller
                </Badge>
                <StockIndicator stock={product.stock}>
                  {product.stock > 10 ? "In Stock" : product.stock > 0 ? `Low Stock (${product.stock})` : "Out of Stock"}
                </StockIndicator>
              </ProductImage>

              <ProductDetails>
                <ProductName>{product.name}</ProductName>

                <Rating>
                  <Stars>
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} color={i < Math.round(product.rating) ? "#FFC107" : "#ddd"} />
                    ))}
                  </Stars>
                  ({product.rating.toFixed(1)})
                </Rating>

                <PriceContainer>
                  <CurrentPrice>₵{product.price.toFixed(2)}</CurrentPrice>
                  <OriginalPrice>₵{product.originalPrice.toFixed(2)}</OriginalPrice>
                  <Savings>
                    <FontAwesomeIcon icon={faTag} /> Save ₵{savings.amount.toFixed(2)} ({savings.percentage}%)
                  </Savings>
                </PriceContainer>

                <PriceRange>
                  Price range: ₵{product.priceRange.min.toFixed(2)} - ₵{product.priceRange.max.toFixed(2)}
                </PriceRange>


                {/* <AddToCartButton disabled={product.stock === 0}>
                  <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                </AddToCartButton> */}

              </ProductDetails>
            </ProductCard>
          );
        })}
      </ProductsGrid>
    </FeaturedItemsContainer>
  );
}

export default FeaturedProducts;

// Styled Components
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.div<{ $imageUrl: string }>`
  height: 200px;
  background-image: url(${(props) => props.$imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
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

// const AddToCartButton = styled.button`
//   width: 100%;
//   padding: 0.8rem;
//   background-color: ${client.primaryColor};
//   color: white;
//   border: none;
//   border-radius: 4px;
//   font-weight: bold;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: ${client.primaryColorLight};
//   }

//   &:disabled {
//     background-color: #ccc;
//     cursor: not-allowed;
//   }
// `;
