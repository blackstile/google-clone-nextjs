import React from 'react';
import { SearchIcon, XIcon } from '@heroicons/react/solid';
import VoiceSearchButton from './VoiceSearchButton';
import VirtualKeyboard from './VirtualKeyboard';

function SearchInput() {
  return (
    <div className="flex flex-grow border-[1px] rounded-full px-5 py-3 sm:max-w-2xl shadow-lg  hover:shadow-md focus-within:shadow-md">
      <div className="flex border-r-[1px] pr-3 mr-3 flex-grow">
        <input className="flex-grow focus:outline-none" type="text" />
        <XIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
      </div>
      <div className="flex">
        <VirtualKeyboard />
        <VoiceSearchButton />
        <SearchIcon className="w-6 h-6 text-blue-500 ml-3" />
      </div>
    </div>
  );
}

export default SearchInput;
