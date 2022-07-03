import React from 'react';
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
        <svg
          className="rounded-full text-gray-600 hover:bg-gray-100 cursor-pointer p-2"
          focusable="false"
          width={40}
          height={40}
          viewBox="0 0 24 24"
        >
          <path
            d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
            fill="#5f6368"
          />
        </svg>
        <User />
      </div>
    </header>
  );
}

export default Header;
