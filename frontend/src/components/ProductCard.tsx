import styled from "styled-components";
import type { Product } from "../types/Config";
import { getClientConfig } from "../lib/getClientConfig";

const client = getClientConfig();

export const ProductCard = ({ product }: { product: Product }) => {
    return (
      <ProductCardStyled>
        <ProductImage>
          <ProductImageImg src={product.images[0]} alt={product.name} />
          {product.stock > 0 ? (
            <StockBadge inStock={true}>
              {product.stock > 10 ? 'In Stock' : `Low Stock (${product.stock})`}
            </StockBadge>
          ) : (
            <StockBadge inStock={false}>Out of Stock</StockBadge>
          )}
        </ProductImage>
        <ProductInfo>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductCode>Product Code: {product.code}</ProductCode>
          <ProductPricing>
            <Price>{client.currencySymbol}{product.price.toFixed(2)} ex VAT</Price>
            <VatPrice>{client.currencySymbol}{product.vatPrice.toFixed(2)} inc VAT</VatPrice>
            {product.originalPrice && (
              <OriginalPrice>
                Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
              </OriginalPrice>
            )}
          </ProductPricing>
          <ProductSpecs>
            {product.specifications.slice(0, 3).map((spec) => (
              <ProductSpec key={spec.key}>
                <strong>{spec.key}:</strong> {spec.value}
              </ProductSpec>
            ))}
          </ProductSpecs>
          <AddToCartButton>Add to Cart</AddToCartButton>
        </ProductInfo>
      </ProductCardStyled>
    );
  };

  const ProductCardStyled = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
 
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
   max-width: 370px;
}
`;

const ProductImage = styled.div`
  position: relative;
  height: 200px;
  background: #f5f5f5;
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
  background: ${({ inStock }) => (inStock ? '#4CAF50' : '#f44336')};
  color: white;
`;

const ProductInfo = styled.div`
  padding: 15px;
`;

const ProductTitle = styled.h3`
  margin: 0 0 5px;
  font-size: 16px;
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
  color: #4CAF50;
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
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: 8px;
  background: ${client.primaryColor};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`;