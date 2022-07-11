import React from 'react';
import SearchPagination from '../pagination/SearchPagination';
import ImageSearchResultItem from './ImageSearchResultItem';
import SearchResultInformation from './SearchResultInformation';

function ImageSearchResult({ results }) {
  return (
    <div className="my-5 px-2 sm:px-6">
      <SearchResultInformation results={results} />
      <div
        className={`w-full mt-4 px-4 mb-8 grid gap-5 sm:mt-0 sm:px-0 grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
      >
        {results.items &&
          results.items.map((result) => (
            <ImageSearchResultItem key={result.link} result={result} />
          ))}
      </div>
      <div className="text-xs mb-8 text-white bg-orange-600 p-2 shadow-lg group">
        <a
          className="group-hover:underline"
          href="https://developers.google.com/custom-search/v1/reference/rest/v1/cse/list?apix_params=%7B%22cx%22%3A%222f67233efdd03c3fe%22%2C%22lr%22%3A%22lang_pt%22%2C%22num%22%3A10%2C%22q%22%3A%22nextjs%22%2C%22start%22%3A90%7D#body.QUERY_PARAMETERS.start"
        >
          <b>Image Search Limitation:</b> The Rest API will never return more
          than 200 results, even if more than 200 images match the query, so
          setting the sum of start + num to a number greater than 200 will
          produce an error. Also note that the maximum value for num is 10.
          Because of this limitation the navigation button from 21 onwards will
          not work
        </a>
      </div>
      <SearchPagination results={results} />
    </div>
  );
}

export default ImageSearchResult;
