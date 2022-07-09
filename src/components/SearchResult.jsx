import SearchResultInformation from './SearchResultInformation';
import SearchResultItem from './SearchResultItem';

function SearchResult({ results }) {
  return (
    <div className="mb-8 sm:ml-40">
      <SearchResultInformation results={results} />
      {results.items.map((result) => (
        <SearchResultItem
          className="max-w-xl"
          key={result.link}
          result={result}
        />
      ))}
    </div>
  );
}

export default SearchResult;
