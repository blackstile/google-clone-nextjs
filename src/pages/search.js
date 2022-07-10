import Head from 'next/head';
import SearchHeader from '../components/search/SearchHeader';
import SearchResult from '../components/search/SearchResult';
import Footer from '../components/Footer';
import Response from '../Response';
import { useRouter } from 'next/router';

export default function Search({ results }) {
  console.log(results);
  const { term } = useRouter().query;
  return (
    <div>
      <Head>
        <title>{`${term} - Pesquisa Google`}</title>
      </Head>
      {/* Search Head */}
      <SearchHeader />

      {/* Search Result */}
      <SearchResult results={results} />

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

  console.log(url);
  const data = isMock ? Response : await fetch(url).then((resp) => resp.json());

  return {
    props: {
      results: data,
    },
  };
}
