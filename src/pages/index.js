import Head from 'next/head';
import Header from '../components/Header';
import { SearchIcon, MicrophoneIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import VoiceSearchButton from '../components/VoiceSearchButton';
import VirtualKeyboard from '../components/VirtualKeyboard';

export default function Home() {
  const router = useRouter();
  const isImage = router.query.searchType === 'image';
  const searchInputRef = useRef(null);

  const search = function (event, iamLucky) {
    event.preventDefault();
    const term = searchInputRef.current.value;
    if (!term.trim()) return;
    const iamLuckParam = iamLucky ? '&iamLucky=true' : '';
    router.push(
      `/search?term=${term.trim()}${
        isImage ? '&searchType=image' : ''
      }${iamLuckParam}`
    );
  };
  return (
    <div className="">
      <Head>
        <title>Google Clone - by William Miranda</title>
        <meta content="width=device-width,initial-scale=1.0" name="viewport" />
        <meta name="description" content="Google Clone - by William Miranda" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Body */}
      <form className="flex flex-col items-center justify-center w-[100vw] h-[60vh] sm:h-[45vh]">
        <div className="relative w-1/2 h-16 sm:h-20 sm:w-[272px]">
          <Image
            // objectFit="contain"
            layout="responsive"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
            width={272}
            height={92}
            alt="Google Logo"
          />
          <span
            className={`${
              isImage ? 'flex' : 'hidden'
            } absolute sm:bottom-[-15px] sm:right-[-5px] bottom-[-5px] right-[-15px] text-blue-600 text-sm sm:text-base font-arial"`}
          >
            Imagens
          </span>
        </div>
        <div className="rounded-full items-center sm:max-w-xl lg:max-w-xl flex w-full mt-5 sm:mt-10 mx-auto max-w-[90%] border border-gray-200 hover:shadow-md focus-within:shadow-md px-5 py-3">
          <SearchIcon className="w-6 h-6 text-gray-500 mr-3" />

          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <VirtualKeyboard />
          <VoiceSearchButton />
          {/* <MicrophoneIcon className="w-6 h-6" /> */}
        </div>
        <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-2 sm:mt-8 justify-center sm:space-x-4 sm:space-y-0">
          <button onClick={search} className="btn">
            <span className={isImage ? 'hidden' : 'block'}>
              Pesquisa Google
            </span>{' '}
            <span className={isImage ? 'block' : 'hidden'}>
              Pesquisa Imagens
            </span>
          </button>
          <button className="btn" onClick={(e) => search(e, true)}>
            Estou com Sorte
          </button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
