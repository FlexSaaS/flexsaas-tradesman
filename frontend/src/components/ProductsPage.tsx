import { useState, useEffect } from 'react';
import { faClose, faFilter, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { getClientConfig } from "../lib/getClientConfig";
import type { FilterGroup, Product } from "../types/Config";
import { Pagination } from "./Pagination";
import { ProductCard } from "./ProductCard";

const client = getClientConfig();

const ProductsPage = () => {
  const [filters, setFilters] = useState<FilterGroup[]>(client.filterGroup || []);
  const [allProducts] = useState<Product[]>(client.products || []);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(client.products || []);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [sortBy, setSortBy] = useState("price-asc");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const sortProducts = (products: Product[]) => {
    let sortedProducts = [...products];
    switch (sortBy) {
      case "price-asc":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    return sortedProducts;
  };

  useEffect(() => {
    const selectedFilters = filters.flatMap((group) => group.options.filter((opt) => opt.selected).map((opt) => opt.name));

    if (selectedFilters.length === 0) {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(
        (product) =>
          selectedFilters.includes(product.material!) ||
          selectedFilters.includes(product.type!) ||
          selectedFilters.includes(product.finish!) ||
          selectedFilters.some(
            (filter) =>
              product.name.toLowerCase().includes(filter.toLowerCase()) ||
              product.description.toLowerCase().includes(filter.toLowerCase()) ||
              product.type?.toLowerCase().includes(filter.toLowerCase())
          )
      );
      setFilteredProducts(filtered);
    }
  }, [filters, allProducts]);

  const toggleFilter = (groupIndex: number, optionIndex: number) => {
    const newFilters = [...filters];
    const option = newFilters[groupIndex].options[optionIndex];

    if (newFilters[groupIndex].type === "checkbox") {
      option.selected = !option.selected;
    } else {
      newFilters[groupIndex].options.forEach((opt, idx) => {
        opt.selected = idx === optionIndex;
      });
    }

    setFilters(newFilters);
  };

  const applyFilters = () => {
    setCurrentPage(1);
    setMobileFiltersOpen(false);
  };

  const clearFilters = () => {
    const resetFilters = filters.map((group) => ({
      ...group,
      options: group.options.map((option) => ({
        ...option,
        selected: false,
      })),
    }));

    setFilters(resetFilters);
    setCurrentPage(1);
    setMobileFiltersOpen(false);
  };

  const sortedProducts = sortProducts(filteredProducts);
  const totalItems = sortedProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  // Check if any filters are selected
  const hasActiveFilters = filters.some((group) => group.options.some((option) => option.selected));

  return (
    <>
      <MobileFilterToggle onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}>
        <FontAwesomeIcon icon={faFilter} size="lg" />
        <span style={{ marginLeft: "12px" }}>Filters</span>
      </MobileFilterToggle>
      <ProductsPageContainer>
        <ProductsContainer>
          <FiltersSidebar open={mobileFiltersOpen}>
            <FiltersHeader>
              <h2 style={{ marginBottom: "12px" }}>Filters</h2>
              {mobileFiltersOpen && (
                <CloseButton onClick={() => setMobileFiltersOpen(false)}>
                  <FontAwesomeIcon icon={faClose} size="lg" />
                </CloseButton>
              )}
            </FiltersHeader>
            {filters.map((group, groupIndex) => (
              <FilterGroupStyled key={group.title}>
                <h3>{group.title}</h3>
                <FilterOptionsList>
                  {group.options.map((option, optionIndex) => (
                    <FilterOptionItem key={option.name}>
                      <FilterOptionLabel>
                        <FilterOptionInput type={group.type} checked={option.selected} onChange={() => toggleFilter(groupIndex, optionIndex)} />
                        {option.name} <OptionCount>({option.count})</OptionCount>
                      </FilterOptionLabel>
                    </FilterOptionItem>
                  ))}
                </FilterOptionsList>
              </FilterGroupStyled>
            ))}
            <ApplyFiltersButton onClick={applyFilters}>Apply Filters</ApplyFiltersButton>
            <ClearFiltersButton onClick={clearFilters}>Clear Filters</ClearFiltersButton>
          </FiltersSidebar>
          <ProductsListing>
            <ListingHeader>
              <p>
                Showing {startIndex + 1} - {endIndex} of {totalItems} products
              </p>
              <ListingControls>
                <DisplayOptions>
                  <span>Display:</span>
                  <DisplaySelect
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}>
                    <option value={6}>6 per page</option>
                    <option value={12}>12 per page</option>
                    <option value={24}>24 per page</option>
                    <option value={48}>48 per page</option>
                  </DisplaySelect>
                </DisplayOptions>
                <SortOptions>
                  <span>Sort by:</span>
                  <SortSelect
                    value={sortBy}
                    onChange={(e) => {
                      setSortBy(e.target.value);
                      setCurrentPage(1);
                    }}>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-asc">Name: A-Z</option>
                  </SortSelect>
                </SortOptions>
              </ListingControls>
            </ListingHeader>

            {hasActiveFilters && filteredProducts.length === 0 ? (
              <NoProductsFound>
                <FontAwesomeIcon icon={faExclamationTriangle} size="3x" />
                <h3>No Products Found</h3>
                <p>We couldn't find any products matching your filters.</p>
                <ClearFiltersButton onClick={clearFilters}>Clear All Filters</ClearFiltersButton>
              </NoProductsFound>
            ) : (
              <>
                <ProductsGrid>
                  {currentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </ProductsGrid>
                {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />}
              </>
            )}
          </ProductsListing>
        </ProductsContainer>
      </ProductsPageContainer>
    </>
  );
};

// Styled Components
const ProductsPageContainer = styled.div`
  display: flex;
  padding: 20px;
`;

const MobileFilterToggle = styled.button`
  display: none;
  background: ${client.primaryColor};
  color: white;
  padding: 10px 15px;
  border: none;
  margin-bottom: 20px;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`;

const FiltersSidebar = styled.aside<{ open: boolean }>`
  width: 250px;
  padding: 20px;
  background: #f8f8f8;
  border-radius: 8px;
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 80%;
    height: 100vh;
    z-index: 1000;
    transform: translateX(${({ open }) => (open ? "0" : "-100%")});
    transition: transform 0.3s;
    overflow-y: auto;
  }
`;

const FiltersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  background: rgb(208, 6, 6);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 10px;
`;

const FilterGroupStyled = styled.div`
  margin-bottom: 25px;
  h3 {
    margin-bottom: 10px;
    font-size: 16px;
  }
`;

const FilterOptionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FilterOptionItem = styled.li`
  margin-bottom: 8px;
`;

const FilterOptionLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const FilterOptionInput = styled.input`
  margin-right: 10px;
`;

const OptionCount = styled.span`
  margin-left: auto;
  color: #666;
  font-size: 0.9em;
`;

const ApplyFiltersButton = styled.button`
  width: 100%;
  padding: 10px;
  background: green;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ClearFiltersButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`;

const ProductsListing = styled.main`
  flex: 1;
`;

const ListingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 15px;
`;

const ListingControls = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
`;

const DisplayOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DisplaySelect = styled.select`
  padding: 5px;
`;

const SortOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SortSelect = styled.select`
  padding: 5px;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const NoProductsFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
  background: #fff8e1;
  border-radius: 8px;
  margin-bottom: 30px;

  h3 {
    margin: 20px 0 10px;
    color: #ff6d00;
  }

  p {
    margin-bottom: 20px;
    color: #666;
  }

  svg {
    color: #ff6d00;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export default ProductsPage;