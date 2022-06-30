import Head from 'next/head';
import Header from '../components/Header';
import { SearchIcon, MicrophoneIcon } from '@heroicons/react/solid';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Body */}
      <form className="flex flex-col items-center justify-center w-[100vw] h-[60vh]">
        <div className="w-1/2 h-20 sm:w-[300px] h-[100px]">
          <Image
            // objectFit="contain"
            layout="responsive"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
            width={300}
            height={100}
            alt="Google Logo"
          />
        </div>
        <div className="rounded-full items-center sm:max-w-xl lg:max-w-2xl flex w-full mt-5 sm:mt-12 mx-auto max-w-[90%] border border-gray-200 hover:shadow-md focus-within:shadow-md px-5 py-3">
          <SearchIcon className="w-6 h-6 text-gray-500 mr-3" />
          <input type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="w-6 h-6" />
        </div>
        <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 justify-center sm:space-x-4 sm:space-y-0">
          <button className="btn">Google Search</button>
          <button className="btn">I&apos;m felling Lucky</button>
        </div>
      </form>

      {/* Footer */}
    </div>
  );
}
