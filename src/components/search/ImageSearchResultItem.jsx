import Image from 'next/image';
import React from 'react';

function ImageSearchResultItem({ result }) {
  return (
    <div className="shadow-lg sm:shadow-none group mb-2">
      <a href={result.image.contextLink}>
        <img
          className="object-contain w-full h-60 sm:group-hover:shadow-xl"
          src={result.link}
          alt={result.title}
        />
      </a>
      <a href={result.image.contextLink}>
        <h2 className="truncate text-xl text-ellipsis group-hover:underline mx-4  sm:mx-0">
          {result.title}
        </h2>
      </a>
      <a href={result.image.contextLink}>
        <p className="truncate text-ellipsis text-gray-600 group-hover:underline  mx-4 mb-4 sm:mx-0  sm:my-0">
          {result.image.contextLink}
        </p>
      </a>
    </div>
  );
}

export default ImageSearchResultItem;
