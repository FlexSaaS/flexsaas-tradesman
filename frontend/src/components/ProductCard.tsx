import styled from "styled-components";
import type { Product } from "../types/Config";
import { getClientConfig } from "../lib/getClientConfig";

const client = getClientConfig();

interface ProductCardProps {
  product: Product;
  highlightText?: string;
}

export const ProductCard = ({ product, highlightText = "" }: ProductCardProps) => {
  // Function to highlight search terms in text
  const highlightTextInString = (text: string, searchText: string) => {
    if (!searchText.trim() || !text) return text;

    const searchTerms = searchText
      .toLowerCase()
      .split(/\s+/)
      .filter((term) => term.length > 0);
    const lowerText = text.toLowerCase();

    // Check if any search term appears in this text
    const hasMatch = searchTerms.some((term) => lowerText.includes(term));

    if (!hasMatch) return text;

    // For simple highlighting, we'll just bold the entire text if it contains search terms
    // For more advanced highlighting, we could use regex to wrap matched terms
    return <span style={{ fontWeight: "bold" }}>{text}</span>;
  };

  // Function to highlight in multiple fields
  const highlightField = (fieldValue: string | undefined) => {
    if (!fieldValue || !highlightText) return fieldValue;
    return highlightTextInString(fieldValue, highlightText);
  };

  // Check if this product matches the search query
  const isSearchMatch =
    highlightText.trim().length > 0 &&
    (product.name.toLowerCase().includes(highlightText.toLowerCase()) ||
      product.description?.toLowerCase().includes(highlightText.toLowerCase()) ||
      product.material?.toLowerCase().includes(highlightText.toLowerCase()) ||
      product.type?.toLowerCase().includes(highlightText.toLowerCase()) ||
      product.finish?.toLowerCase().includes(highlightText.toLowerCase()) ||
      product.specifications?.some(
        (spec) => spec.key.toLowerCase().includes(highlightText.toLowerCase()) || spec.value.toLowerCase().includes(highlightText.toLowerCase())
      ));

  return (
    <ProductCardStyled isHighlighted={isSearchMatch}>
      {isSearchMatch && <SearchMatchIndicator>Search Match</SearchMatchIndicator>}
      <ProductImage>
        <ProductImageImg src={product.images[0]} alt={product.name} />
        {product.stock > 0 ? (
          <StockBadge inStock={true}>{product.stock > 10 ? "In Stock" : `Low Stock (${product.stock})`}</StockBadge>
        ) : (
          <StockBadge inStock={false}>Out of Stock</StockBadge>
        )}
      </ProductImage>
      <ProductInfo>
        <ProductTitle>{highlightField(product.name)}</ProductTitle>
        <ProductCode style={{ display: "none" }}>Product Code: {product.code}</ProductCode>
        <ProductPricing style={{ display: "none" }}>
          <Price>
            {client.currencySymbol}
            {product.price.toFixed(2)} ex VAT
          </Price>
          <VatPrice>
            {client.currencySymbol}
            {product.vatPrice.toFixed(2)} inc VAT
          </VatPrice>
          {product.originalPrice && <OriginalPrice>Save {Math.round((1 - product.price / product.originalPrice) * 100)}%</OriginalPrice>}
        </ProductPricing>
        {product.description && <ProductDescription>{highlightField(product.description)}</ProductDescription>}
        <ProductSpecs>
          {product.specifications?.slice(0, 3).map((spec) => (
            <ProductSpec key={spec.key}>
              <strong>{highlightField(spec.key)}:</strong> {highlightField(spec.value)}
            </ProductSpec>
          ))}
        </ProductSpecs>
        {/* Optional: Show matched search terms */}
        {isSearchMatch && highlightText && (
          <SearchMatchInfo>
            <small>Matches: {highlightText}</small>
          </SearchMatchInfo>
        )}
        {/* <AddToCartButton>Add to Cart</AddToCartButton> */}
      </ProductInfo>
    </ProductCardStyled>
  );
};

const ProductCardStyled = styled.div<{ isHighlighted?: boolean }>`
  border: 1px solid ${(props) => (props.isHighlighted ? "#3b82f6" : "#8d8c8c")};
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  position: relative;
  background: ${(props) => (props.isHighlighted ? "#f0f9ff" : "white")};

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
  }

  //   @media (max-width: 768px) {
  //    max-width: 370px;
  // }
`;

const SearchMatchIndicator = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #3b82f6;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: bold;
  z-index: 2;
`;

const ProductImage = styled.div`
  position: relative;
  height: 300px;
  background: #ffffffff;
`;

const ProductImageImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const StockBadge = styled.span<{ inStock: boolean }>`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  background: ${({ inStock }) => (inStock ? "#4CAF50" : "#f44336")};
  color: white;
`;

const ProductInfo = styled.div`
  padding: 15px;
`;

const ProductTitle = styled.h3`
  margin: 0 0 5px;
  font-size: 16px;
  color: #333;
`;

const ProductDescription = styled.p`
  color: #666;
  font-size: 14px;
  margin: 8px 0;
  line-height: 1.4;
`;

const ProductCode = styled.p`
  color: #666;
  font-size: 14px;
  margin: 0 0 10px;
`;

const ProductPricing = styled.div`
  margin: 10px 0;
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin: 10px 0;
`;

const VatPrice = styled.span`
  color: #666;
  font-size: 14px;
  margin: 10px 0;
`;

const OriginalPrice = styled.span`
  color: #4caf50;
  font-size: 14px;
  font-weight: bold;
`;

const ProductSpecs = styled.ul`
  list-style: none;
  padding: 10px 0;
  margin: 10px 0;
  font-size: 14px;
`;

const ProductSpec = styled.li`
  margin-bottom: 5px;
  color: #555;
`;

const SearchMatchInfo = styled.div`
  margin-top: 8px;
  padding: 4px 8px;
  background: #e0f2fe;
  border-radius: 4px;
  border-left: 3px solid #3b82f6;

  small {
    color: #1e40af;
    font-size: 12px;
  }
`;

// const AddToCartButton = styled.button`
//   width: 100%;
//   padding: 8px;
//   background: ${client.primaryColor};
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   margin-top: 10px;
// `;
