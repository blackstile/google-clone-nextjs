import Link from 'next/link';
import { useRouter } from 'next/router';

function PaginationButton({ pageNumber, currentPage, startIndex }) {
  const router = useRouter();
  let isCurrentPage = pageNumber === currentPage;
  const searchType = router.query.searchType || '';

  return (
    <div className="">
      {isCurrentPage ? (
        <a className="flex flex-col items-center justify-center">
          <span className="current-google-page"></span>
          <span>{pageNumber}</span>
        </a>
      ) : (
        <Link
          passHref
          href={`/search?term=${
            router.query.term
          }&searchType=${searchType}&start=${startIndex + 1}`}
        >
          <a
            className="flex flex-col text-blue-700 hover:underline items-center justify-center"
            href="#"
          >
            <span className="item-google-pagination"></span>
            {pageNumber}
          </a>
        </Link>
      )}
    </div>
  );
}

export default PaginationButton;
