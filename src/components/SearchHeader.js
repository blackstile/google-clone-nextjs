import React from 'react';
import ApplicationsButton from './ApplicationsButton';
import User from './User';
import SearchTypeButton from './SearchTypeButton';
import SearchInput from './SearchInput';
import Image from 'next/image';
import ConfigurationButton from './ConfigurationButton';
import { useRouter } from 'next/router';
import { MenuIcon } from '@heroicons/react/outline';

function SearchHeader() {
  const router = useRouter();

  return (
    <header className="sticky top-0 bg-white flex flex-col border-b-[1px] pt-3 sm:pt-6">
      <div className="w-full sm:flex">
        <div className="flex flex-shrink-0 items-center justify-between mx-[5%] mb-3 sm:mx-auto sm:mb-0">
          <MenuIcon className="w-6 h-6 sm:hidden" />
          <div className="cursor-pointer text-center sm:text-left border-red-500 sm:mt-3 sm:px-6 sm:pr-10 max-w-[180px] sm:max-h-[160px] sm:max-w-[300px]">
            <Image
              onClick={() => router.push('/')}
              objectFit="contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
              width={92}
              height={30}
              alt="Google Logo"
            />
          </div>
          <User className="sm:hidden" />
        </div>
        <SearchInput />
        <div className="hidden sm:flex space-x-3 flex-grow justify-end pr-8">
          <ConfigurationButton />
          <ApplicationsButton />
          <User className="hidden sm:flex" />
        </div>
      </div>
      <div className="flex space-x-6 mt-5 sm:ml-40 justify-evenly sm:justify-start">
        <SearchTypeButton
          iconName="SearchIcon"
          label="Todas"
          active={!router.query.searchType || router.query.searchType === ''}
        />
        <SearchTypeButton
          iconName="PhotographIcon"
          label="Imagens"
          active={router.query.searchType === 'image'}
        />
      </div>
    </header>
  );
}

export default SearchHeader;
