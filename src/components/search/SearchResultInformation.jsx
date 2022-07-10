function SearchResultInformation({ results }) {
  const formatResult = (number) => {
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };
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
