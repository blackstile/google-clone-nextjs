import Head from 'next/head';
import SearchHeader from '../components/search/SearchHeader';
import SearchResult from '../components/search/SearchResult';
import Footer from '../components/Footer';
import Response from '../SearchResponse';
import { useRouter } from 'next/router';
import ImageResponse from '../ImageSearchResponse';
import ImageSearchResult from '../components/search/ImageSearchResult';

export default function Search({ results }) {
  console.log(results);
  const router = useRouter();
  const { term, searchType } = router.query;
  const isImageSearch = searchType === 'image';

  return (
    <div>
      <Head>
        <title>{`${term} - Pesquisa Google`}</title>
        <meta content="width=device-width,initial-scale=1.0" name="viewport" />
        <meta name="description" content="Google Clone - by William Miranda" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Search Head */}
      <SearchHeader />

      {/* Search Result */}
      {isImageSearch ? (
        <ImageSearchResult results={results} />
      ) : (
        <SearchResult results={results} />
      )}

      <Footer className="relative" />
    </div>
  );
}

export async function getServerSideProps(context) {
  const isMock = false;
  const startIndex = context.query.start || 1;
  const searchType = context.query.searchType && '&searchType=image';
  const gooleApiKey = process.env.GOOGLE_API_KEY;
  const contextKey = process.env.GOOGLE_CONTEXT_KEY;
  const url = `https://www.googleapis.com/customsearch/v1?key=${gooleApiKey}&cx=${contextKey}&q=${context.query.term}&start=${startIndex}&${searchType}`;
  let mockResponse =
    isMock && context.query.searchType === 'image' ? ImageResponse : Response;

  const data = isMock
    ? mockResponse
    : await fetch(url).then((resp) => resp.json());

  return {
    props: {
      results: data,
    },
  };
}
