import Head from 'next/head';
import SearchHeader from '../components/SearchHeader';
import Response from '../Response';

export default function Search({ results }) {
  console.log(results);
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

export async function getServerSideProps(context) {
  const mockData = true;
  const searchType = context.query.searchType && '&searchType=image';
  const gooleApiKey = process.env.GOOGLE_API_KEY;
  const contextKey = process.env.GOOGLE_CONTEXT_KEY;
  const url = `https://www.googleapis.com/customsearch/v1?key=${gooleApiKey}&cx=${contextKey}&q=${context.query.term}&${searchType}`;

  const data = mockData
    ? Response
    : await fetch(url).then((resp) => resp.json());

  return {
    props: {
      results: data,
    },
  };
}
