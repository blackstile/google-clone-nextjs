import React from 'react';
import ApplicationsButton from './ApplicationsButton';
import User from './User';

function Header() {
  return (
    <header className="flex justify-between py-2 px-5 text-gray-700">
      <div className="flex space-x-4 items-center">
        {/* <p className="link">About</p> */}
        {/* <p className="link">Store</p> */}
      </div>
      <div className="flex relative space-x-3 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        <ApplicationsButton />
        <User />
      </div>
    </header>
  );
}

export default Header;
