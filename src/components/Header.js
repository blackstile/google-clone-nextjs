import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import ApplicationsButton from './ApplicationsButton';
import User from './User';

function Header() {
  const router = useRouter();
  const isImage = router.query.searchType === 'image';
  console.log('isImage', isImage);
  return (
    <header className="flex justify-between py-2 px-5 text-gray-700">
      <div className="flex space-x-4 items-center">
        {/* <p className="link">About</p> */}
        {/* <p className="link">Store</p> */}
      </div>
      <div className="flex relative space-x-3 items-center">
        <Link href="https://mail.google.com/mail/?tab=rm&authuser=0&ogbl">
          <p className="link">Gmail</p>
        </Link>
        <Link href="/">
          <p className={`${isImage ? 'flex' : 'hidden'} link`}>Pesquisa</p>
        </Link>
        <Link href="/?searchType=image">
          <p className={`${!isImage ? 'flex' : 'hidden'} link`}>Imagens</p>
        </Link>
        <ApplicationsButton />
        <User />
      </div>
    </header>
  );
}

export default Header;
