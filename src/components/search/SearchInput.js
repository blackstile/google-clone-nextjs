import { useRef, useState } from 'react';
import { SearchIcon, XIcon } from '@heroicons/react/solid';
import VoiceSearchButton from '../VoiceSearchButton';
import VirtualKeyboard from '../VirtualKeyboard';
import { useRouter } from 'next/router';

function SearchInput() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const clearInputButtonRef = useRef(null);
  const search = (event) => {
    if (event.type == 'click' || event.code.toLowerCase() === 'enter') {
      const term = searchInputRef.current.value;
      const searchType = router.query.searchType;
      router.push(
        `/search?term=${term}&searchType=${!searchType ? '' : searchType}`
      );
    }
  };
  const onChangeHandler = () => {
    if (searchInputRef.current.value.trim() === '') {
      clearInputButtonRef.current.classList.add('hidden');
    } else {
      clearInputButtonRef.current.classList.remove('hidden');
    }
  };

  const onClearHandler = () => {
    clearInputButtonRef.current.classList.add('hidden');
    searchInputRef.current.value = '';
    searchInputRef.current.focus();
  };

  return (
    <div className="flex flex-grow border-[1px] w-[90%] rounded-full px-3 sm:px-5 py-3 sm:max-w-2xl shadow-lg mx-auto hover:shadow-md focus-within:shadow-md">
      <div className="flex sm:border-r-[1px] sm:pr-3 sm:mr-3 flex-grow">
        <SearchIcon className="w-6 h-6 text-gray-500 sm:hidden sm:ml-3" />
        <input
          ref={searchInputRef}
          defaultValue={router.query.term}
          className="flex-grow focus:outline-none pl-2"
          type="text"
          onKeyDown={(e) => search(e)}
          onChange={onChangeHandler}
        />
        <XIcon
          ref={clearInputButtonRef}
          className="w-6 h-6 text-gray-500 cursor-pointer"
          onClick={onClearHandler}
        />
      </div>
      <div className="hidden sm:flex">
        <VirtualKeyboard />
        <VoiceSearchButton />
        <SearchIcon
          className="w-6 h-6 text-blue-500 ml-3 hidden sm:block cursor-pointer"
          onClick={(e) => search(e)}
        />
      </div>
    </div>
  );
}

export default SearchInput;
