import Head from 'next/head';
import React from 'react';
import SearchHeader from '../components/SearchHeader';

function Search() {
  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>
      {/* Search Head */}
      <SearchHeader />

      {/* Search Result */}
    </div>
  );
}

export default Search;
