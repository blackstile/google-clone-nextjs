import SearchPagination from '../pagination/SearchPagination';
import SearchResultInformation from './SearchResultInformation';
import SearchResultItem from './SearchResultItem';

function SearchResult({ results }) {
  return (
    <div className="w-full mt-4 px-4 sm:mt-0 sm:px-0 sm:max-w-xl mb-8 sm:ml-40">
      <SearchResultInformation results={results} />
      {results.items.map((result) => (
        <SearchResultItem key={result.link} result={result} />
      ))}
      <SearchPagination results={results} />
    </div>
  );
}

export default SearchResult;
