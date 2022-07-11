import Parser from 'html-react-parser';
import Link from 'next/link';
import { useRouter } from 'next/router';
function PreviousButtonPagination({ isFirst, startIndex }) {
  const router = useRouter();
  const classButton = isFirst
    ? 'first-google-page'
    : 'previous-google-pagination';
  const searchType = router.query.searchType || '';

  return (
    <Link
      passHref
      href={`/search?term=${router.query.term}&searchType=${searchType}&start=${startIndex}`}
    >
      <a
        className={`flex flex-col text-blue-700 hover:underline items-center justify-center`}
      >
        <span className={`self-end ${classButton}`}></span>
        <span className="hidden sm:flex mr-[35px]">
          {isFirst ? Parser('&nbsp;') : 'Anterior'}
        </span>
        <span className="sm:hidden mr-[35px] no-underline">
          {Parser('&nbsp;')}
        </span>
      </a>
    </Link>
  );
}

export default PreviousButtonPagination;
