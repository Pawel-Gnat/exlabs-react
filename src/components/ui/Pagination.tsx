import { Button } from './Button';

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

export const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <div
      aria-label="Pagination for characters list"
      className="space-x-4"
      role="navigation"
    >
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          ariaCurrent={index + 1 === currentPage ? 'page' : undefined}
          ariaLabel={`Page ${index + 1}`}
          className={`${index + 1 === currentPage ? 'font-bold, opacity-70' : ''}`}
          disabled={index + 1 === currentPage}
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          text={(index + 1).toString()}
        />
      ))}
    </div>
  );
};
