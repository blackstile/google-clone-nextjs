import React from 'react';
import ApplicationsButton from './ApplicationsButton';
import User from './User';
import SearchTypeButton from './SearchTypeButton';
import SearchInput from './SearchInput';
import Image from 'next/image';
import ConfigurationButton from './ConfigurationButton';

function SearchHeader() {
  return (
    <header className="sticky top-0 flex flex-col border-b-[1px] mt-6">
      <div className="w-full flex items-center">
        <div className="mt-3 px-6 pr-10 max-h-[150px] max-w-d[300px]">
          <Image
            objectFit="cover"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
            width={92}
            height={30}
            alt="Google Logo"
          />
        </div>
        <SearchInput />
        <div className="flex space-x-3 flex-grow justify-end pr-8">
          <ConfigurationButton />
          <ApplicationsButton />
          <User />
        </div>
      </div>
      <div className="flex space-x-6 mt-5 ml-40">
        <SearchTypeButton iconName="SearchIcon" label="Todas" active={true} />
        <SearchTypeButton iconName="PhotographIcon" label="Imagens" />
      </div>
    </header>
  );
}

export default SearchHeader;
