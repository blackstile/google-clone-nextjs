import Parser from 'html-react-parser';
import Link from 'next/link';
import { useRouter } from 'next/router';

function NextButtonPagination({ isLast, startIndex }) {
  const router = useRouter();
  let classButton = isLast
    ? 'last-google-pagination'
    : 'next-google-pagination';
  const searchType = router.query.searchType || '';
  return (
    <Link
      passHref
      href={`/search?term=${router.query.term}&searchType=${searchType}&start=${startIndex}`}
    >
      <a
        className="flex flex-col text-blue-700 hover:underline items-center justify-center"
        href="#"
      >
        <span className={`self-start ${classButton}`}></span>
        <span className="ml-[53px]">{isLast ? Parser('&nbsp;') : 'Mais'}</span>
      </a>
    </Link>
  );
}

export default NextButtonPagination;
