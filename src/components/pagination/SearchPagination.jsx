import React from 'react';
import NextButtonPagination from './NextButtonPagination';
import PaginationButton from './PaginationButton';
import PreviousButtonPagination from './PreviousButtonPagination';

function SearchPagination({ results }) {
  let { request, previousPage, nextPage } = results.queries;
  let { startIndex, count } = request[0];
  let page = startIndex === 1 ? 1 : Math.ceil(startIndex / count);
  let firstPage = page >= 7 ? page - 5 : 1;

  let nextIndex = nextPage ? nextPage[0].startIndex : startIndex;
  let previousIndex = previousPage ? previousPage[0].startIndex : startIndex;
  previousPage = true;
  return (
    <div className="flex mx-auto justify-center font-arial text-sm">
      {(() => {
        let buttons = [];
        buttons.push(
          <PreviousButtonPagination
            key={startIndex - 1}
            isFirst={!previousPage}
            startIndex={previousIndex}
          />
        );
        for (let i = 0; i < count; i++) {
          buttons.push(
            <PaginationButton
              key={startIndex + i}
              pageNumber={i + firstPage}
              currentPage={page}
              startIndex={(i + firstPage - 1) * count}
            />
          );
        }
        buttons.push(
          <NextButtonPagination
            key={nextIndex + count + 1}
            isLast={!nextPage}
            startIndex={nextIndex}
          />
        );
        return buttons;
      })()}
    </div>
  );
  // const start, current
}

export default SearchPagination;
