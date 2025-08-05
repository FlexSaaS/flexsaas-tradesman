import styled from "styled-components";
import { getClientConfig } from "../lib/getClientConfig";


const client = getClientConfig();

export const Pagination = ({ currentPage, totalPages, onPageChange }: { currentPage: number; totalPages: number; onPageChange: (page: number) => void }) => {
    return (
      <PaginationStyled>
        <PaginationButton disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
          Previous
        </PaginationButton>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PaginationButton key={page} className={currentPage === page ? 'active' : ''} onClick={() => onPageChange(page)}>
            {page}
          </PaginationButton>
        ))}
        <PaginationButton disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
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
