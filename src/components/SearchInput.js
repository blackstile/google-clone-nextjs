import React from 'react';
import { SearchIcon, XIcon } from '@heroicons/react/solid';
import VoiceSearchButton from './VoiceSearchButton';
import VirtualKeyboard from './VirtualKeyboard';

function SearchInput() {
  return (
    <div className="flex flex-grow border-[1px] w-[90%] rounded-full px-3 sm:px-5 py-3 sm:max-w-2xl shadow-lg mx-auto hover:shadow-md focus-within:shadow-md">
      <div className="flex sm:border-r-[1px] sm:pr-3 sm:mr-3 flex-grow">
        <SearchIcon className="w-6 h-6 text-gray-500 sm:hidden sm:ml-3" />
        <input className="flex-grow focus:outline-none pl-2" type="text" />
        <XIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
      </div>
      <div className="hidden sm:flex">
        <VirtualKeyboard />
        <VoiceSearchButton />
        <SearchIcon className="w-6 h-6 text-blue-500 ml-3 hidden sm:block" />
      </div>
    </div>
  );
}

export default SearchInput;
