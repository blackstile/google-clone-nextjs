import SearchPagination from '../pagination/SearchPagination';
import SearchResultInformation from './SearchResultInformation';
import SearchResultItem from './SearchResultItem';

function SearchResult({ results }) {
  return (
    <div className="w-full mt-4 px-4 sm:mt-0 sm:px-0 mb-8 sm:max-w-xl sm:ml-40">
      <SearchResultInformation results={results} />
      {results.items &&
        results.items.map((result) => (
          <SearchResultItem key={result.link} result={result} />
        ))}
      <div className="text-xs mb-8 text-white bg-orange-600 p-2 shadow-lg group">
        <a
          className="group-hover:underline"
          href="https://developers.google.com/custom-search/v1/reference/rest/v1/cse/list?apix_params=%7B%22cx%22%3A%222f67233efdd03c3fe%22%2C%22lr%22%3A%22lang_pt%22%2C%22num%22%3A10%2C%22q%22%3A%22nextjs%22%2C%22start%22%3A90%7D#body.QUERY_PARAMETERS.start"
        >
          <b>Web Search Limitation:</b> The JSON API will never return more than
          100 results, even if more than 100 documents match the query, so
          setting the sum of start + num to a number greater than 100 will
          produce an error. Also note that the maximum value for num is 10.
          Because of this limitation the navigation button from 11 onwards will
          not work
        </a>
      </div>
      <SearchPagination results={results} />
    </div>
  );
}

export default SearchResult;
