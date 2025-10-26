import styled from "styled-components";
import { getClientConfig } from "../lib/getClientConfig";

const client = getClientConfig();

const Pagination = ({ currentPage, totalPages, onPageChange }: { currentPage: number; totalPages: number; onPageChange: (page: number) => void }) => {
  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 3; // Maximum number of visible page buttons

    // Always show the first page button
    buttons.push(
      <PaginationButton
        key={1}
        className={currentPage === 1 ? 'active' : ''}
        onClick={() => onPageChange(1)}
      >
        1
      </PaginationButton>
    );

    // Determine the range of page buttons to show around the current page
    let startPage = Math.max(2, currentPage - Math.floor(maxVisibleButtons / 2));
    let endPage = Math.min(totalPages - 1, startPage + maxVisibleButtons - 1);

    // Adjust the range if it exceeds the total number of pages
    if (endPage - startPage + 1 < maxVisibleButtons) {
      startPage = Math.max(2, endPage - maxVisibleButtons + 1);
    }

    // Show ellipsis if there are skipped pages before the range
    if (startPage > 2) {
      buttons.push(<span key="start-ellipsis">...</span>);
    }

    // Show the page buttons within the calculated range
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <PaginationButton
          key={i}
          className={currentPage === i ? 'active' : ''}
          onClick={() => onPageChange(i)}
        >
          {i}
        </PaginationButton>
      );
    }

    // Show ellipsis if there are skipped pages after the range
    if (endPage < totalPages - 1) {
      buttons.push(<span key="end-ellipsis">...</span>);
    }

    // Always show the last page button if there is more than one page
    if (totalPages > 1) {
      buttons.push(
        <PaginationButton
          key={totalPages}
          className={currentPage === totalPages ? 'active' : ''}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </PaginationButton>
      );
    }

    return buttons;
  };

  return (
    <PaginationStyled>
      <PaginationButton
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </PaginationButton>
      {renderPaginationButtons()}
      <PaginationButton
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </PaginationButton>
    </PaginationStyled>
  );
};

const PaginationStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 30px;
  flex-wrap: wrap; /* Allow buttons to wrap to the next line on small screens */
`;

const PaginationButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;

  &.active {
    background: ${client.primaryColor};
    color: white;
    border-color: ${client.primaryColor};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default Pagination;
