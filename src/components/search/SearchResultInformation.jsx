import Link from 'next/link';
import { useRouter } from 'next/router';

function SearchResultInformation({ results }) {
  let router = useRouter();
  const formatResult = (number) => {
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };
  if (!results.searchInformation) {
    const { term, searchType } = router.query;
    return (
      <div className="my-10">
        <h2 className="text-xl">
          No results to show. Check Google Web Search Rest Api limitation
        </h2>
        <Link passHref href={`/search?term=${term}&searchType=${searchType}`}>
          <a className="hover:underline text-blue-500">Back to Search</a>
        </Link>
      </div>
    );
  }
  const { totalResults, formattedSearchTime } = results.searchInformation;
  return (
    <div className="hidden sm:block text-gray-400 text-sm font-google-sans mt-2 mb-4">
      {`Aproximadamente ${formatResult(
        totalResults
      )} resultados (${formattedSearchTime.replace('.', ',')} segundos)`}
    </div>
  );
}

export default SearchResultInformation;
