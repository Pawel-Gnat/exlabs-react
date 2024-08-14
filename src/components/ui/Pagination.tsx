import { Button } from './Button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <div
      className="space-x-4"
      role="navigation"
      aria-label="Pagination for characters list"
    >
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          disabled={index + 1 === currentPage}
          text={(index + 1).toString()}
          className={`${index + 1 === currentPage ? 'font-bold, opacity-70' : ''}`}
          ariaLabel={`Page ${index + 1}`}
          ariaCurrent={index + 1 === currentPage ? 'page' : undefined}
        />
      ))}
    </div>
  );
};
