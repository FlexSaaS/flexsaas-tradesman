import { useState, useEffect, useMemo } from "react";
import { faClose, faFilter, faExclamationTriangle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { getClientConfig } from "../lib/getClientConfig";
import type { FilterGroup, Product } from "../types/Config";
import Pagination from "./Pagination";
import { ProductCard } from "./ProductCard";

const client = getClientConfig();

const ProductsPage = () => {
  const [filters, setFilters] = useState<FilterGroup[]>(client.filterGroup || []);
  const [allProducts] = useState<Product[]>(client.products || []);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(client.products || []);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [sortBy, setSortBy] = useState("price-asc");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to refresh the entire page
  const handleRefresh = () => {
    window.location.reload();
  };

  // Function to search products by keywords
  const searchProducts = (products: Product[], query: string) => {
    if (!query.trim()) return products;

    const searchTerms = query
      .toLowerCase()
      .split(/\s+/)
      .filter((term) => term.length > 0);

    return products.filter((product) => {
      // Search in multiple fields
      const searchableText = [product.name, product.description, product.material, product.type, product.finish]
        .filter(Boolean)
        .map((text) => text!.toLowerCase())
        .join(" ");

      // Check if all search terms are found in the searchable text
      return searchTerms.every((term) => searchableText.includes(term));
    });
  };

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

  // Memoized search results to avoid recalculating on every render
  const searchedProducts = useMemo(() => {
    return searchProducts(allProducts, searchQuery);
  }, [allProducts, searchQuery]);

  useEffect(() => {
    const selectedFilters = filters.flatMap((group) => group.options.filter((opt) => opt.selected).map((opt) => opt.name));
    if (selectedFilters.length === 0) {
      setFilteredProducts(searchedProducts);
    } else {
      const filtered = searchedProducts.filter(
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

    // Reset to first page when filters or search changes
    setCurrentPage(1);
  }, [filters, searchedProducts]);

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

  const clearSearch = () => {
    setSearchQuery("");
    setCurrentPage(1);
  };

  const sortedProducts = sortProducts(filteredProducts);
  const totalItems = sortedProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  const hasActiveFilters = filters.some((group) => group.options.some((option) => option.selected));
  const hasSearchQuery = searchQuery.trim().length > 0;

  return (
    <>
      <MobileFilterToggle onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}>
        <FontAwesomeIcon icon={faFilter} size="lg" />
        <span style={{ marginLeft: "12px" }}>Filters</span>
      </MobileFilterToggle>
      <Overlay open={mobileFiltersOpen} onClick={() => setMobileFiltersOpen(false)} />
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

            {/* Search Input in Filters Sidebar */}
            <SearchContainer>
              <SearchInputWrapper>
                <FontAwesomeIcon icon={faSearch} size="sm" />
                <SearchInput type="text" placeholder="Search products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                {hasSearchQuery && (
                  <ClearSearchButton onClick={clearSearch}>
                    <FontAwesomeIcon icon={faClose} size="sm" />
                  </ClearSearchButton>
                )}
              </SearchInputWrapper>
              {hasSearchQuery && (
                <SearchResultsInfo>
                  Found {searchedProducts.length} product{searchedProducts.length !== 1 ? "s" : ""} for "{searchQuery}"
                </SearchResultsInfo>
              )}
            </SearchContainer>

            <FilterOptionsContainer>
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
            </FilterOptionsContainer>
            <ApplyFiltersButton onClick={applyFilters}>Apply Filters</ApplyFiltersButton>
            <ClearFiltersButton onClick={clearFilters}>Clear Filters</ClearFiltersButton>
            {hasSearchQuery && <ClearSearchButtonFullWidth onClick={clearSearch}>Clear Search</ClearSearchButtonFullWidth>}

            {/* Refresh Button in Filters Sidebar */}
            <RefreshButton onClick={handleRefresh}>
              <FontAwesomeIcon icon={faSync} size="sm" />
              <span style={{ marginLeft: "8px" }}>Refresh Page</span>
            </RefreshButton>
          </FiltersSidebar>
          <ProductsListing>
            {/* Search Bar in Main Content Area */}
            <SearchBarContainer>
              <SearchBarWrapper>
                <FontAwesomeIcon icon={faSearch} />
                <SearchBarInput
                  type="text"
                  placeholder="Search products by name, description, material, type, finish..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {hasSearchQuery && (
                  <ClearSearchBarButton onClick={clearSearch}>
                    <FontAwesomeIcon icon={faClose} />
                  </ClearSearchBarButton>
                )}
              </SearchBarWrapper>
              {hasSearchQuery && (
                <SearchSummary>
                  <span>
                    Showing {Math.min(sortedProducts.length, 1)}-{Math.min(endIndex, sortedProducts.length)} of {sortedProducts.length} result
                    {sortedProducts.length !== 1 ? "s" : ""} for "{searchQuery}"
                  </span>
                  <ClearSearchTextButton onClick={clearSearch}>Clear search</ClearSearchTextButton>
                </SearchSummary>
              )}
            </SearchBarContainer>

            <ListingHeader>
              <p>
                Showing {startIndex + 1} - {endIndex} of {totalItems} product{totalItems !== 1 ? "s" : ""}
                {hasSearchQuery && ` for "${searchQuery}"`}
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

                {/* Refresh Button in Header */}
                <RefreshButtonSmall onClick={handleRefresh} title="Refresh page">
                  <FontAwesomeIcon icon={faSync} />
                </RefreshButtonSmall>
              </ListingControls>
            </ListingHeader>
            {hasActiveFilters && filteredProducts.length === 0 ? (
              <NoProductsFound>
                <FontAwesomeIcon icon={faExclamationTriangle} size="3x" />
                <h3>No Products Found</h3>
                <p>We couldn't find any products matching your filters.</p>
                <ClearFiltersButton onClick={clearFilters}>Clear All Filters</ClearFiltersButton>
                {hasSearchQuery && (
                  <ClearSearchButton onClick={clearSearch} style={{ marginTop: "12px" }}>
                    Clear Search
                  </ClearSearchButton>
                )}

                {/* Refresh Button in No Products Found state */}
                <RefreshButton onClick={handleRefresh} style={{ marginTop: "12px" }}>
                  <FontAwesomeIcon icon={faSync} size="sm" />
                  <span style={{ marginLeft: "8px" }}>Refresh Page</span>
                </RefreshButton>
              </NoProductsFound>
            ) : (
              <>
                <ProductsGrid>
                  {currentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} highlightText={searchQuery} />
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

// Styled Components for Search Functionality
const SearchContainer = styled.div`
  padding: 0 16px 16px;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 16px;
`;

const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: #f9fafb;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  padding: 8px 12px;

  &:focus-within {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  svg {
    color: #6b7280;
    margin-right: 8px;
  }
`;

// Add this import at the top with other FontAwesome imports
import { faSync } from "@fortawesome/free-solid-svg-icons";

// Add these styled components (place them with your other styled components)

const RefreshButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
  background-color: #f0f0f0;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 12px;

  &:hover {
    background-color: #e0e0e0;
    border-color: #ccc;
  }

  &:active {
    transform: translateY(1px);
  }
`;

const RefreshButtonSmall = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  background-color: #f0f0f0;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-left: 12px;

  &:hover {
    background-color: #e0e0e0;
    border-color: #ccc;
  }

  &:active {
    transform: translateY(1px);
  }
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 14px;
  outline: none;
  color: #111827;

  &::placeholder {
    color: #9ca3af;
  }
`;

const ClearSearchButton = styled.button`
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #374151;
  }
`;

const SearchResultsInfo = styled.div`
  font-size: 12px;
  color: #6b7280;
  margin-top: 8px;
  line-height: 1.4;
`;

const ClearSearchButtonFullWidth = styled.button`
  width: 100%;
  padding: 12px;
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  color: #374151;
  font-weight: 500;
  cursor: pointer;
  margin-top: 8px;
  transition: all 0.2s;

  &:hover {
    background: #e5e7eb;
  }
`;

const SearchBarContainer = styled.div`
  margin-bottom: 24px;
`;

const SearchBarWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  padding: 12px 16px;

  &:focus-within {
    border-color: #3b82f6;
  }

  svg {
    color: #6b7280;
    margin-right: 12px;
  }
`;

const SearchBarInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 16px;
  outline: none;
  color: #111827;

  &::placeholder {
    color: #9ca3af;
  }
`;

const ClearSearchBarButton = styled.button`
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #374151;
  }
`;

const SearchSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  font-size: 14px;
  color: #6b7280;
`;

const ClearSearchTextButton = styled.button`
  background: none;
  border: none;
  color: #3b82f6;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;

  &:hover {
    color: #2563eb;
  }
`;

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
  display: flex;
  flex-direction: column;
  height: calc(100vh - 40px);
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 80%;
    height: 90vh;
    z-index: 1000;
    transform: translateX(${({ open }) => (open ? "0" : "-100%")});
    transition: transform 0.3s;
  }
`;

const FilterOptionsContainer = styled.div`
  overflow-y: auto;
  flex: 1;
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
  margin-top: auto;
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

const Overlay = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  cursor: pointer;
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
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
