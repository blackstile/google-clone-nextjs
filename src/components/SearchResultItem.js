import React from 'react';
import Parser from 'html-react-parser';

function SearchResultItem({ result, className }) {
  return (
    <div className={`mb-8 font-arial ${className}`}>
      <a className="group" href={result.link}>
        <p className="text-sm truncate">{Parser(result.htmlFormattedUrl)}</p>
        <p className=" group-hover:underline text-lg text-blue-700 truncate">
          {Parser(result.htmlTitle)}
        </p>
      </a>
      <p className="text-[#4D5156] text-sm leading-[22px]">
        {Parser(result.htmlSnippet)}
      </p>
    </div>
  );
}

export default SearchResultItem;
