import Head from 'next/head';
import Header from '../components/Header';
import { SearchIcon, MicrophoneIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Google Clone - by William Miranda</title>
        <meta name="description" content="Google Clone - by William Miranda" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Body */}
      <form className="flex flex-col items-center justify-center w-[100vw] h-[60vh]">
        <div className="w-1/2 h-20 sm:w-[300px]">
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
          <div className="w-9 h-6">
            <Image
              className="bg-transparent cursor-pointer"
              src="/tia_flat.png"
              alt="Teclado Virtual"
              width={19}
              height={11}
            />
          </div>
          <svg
            className="w-6 h-6"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#4285f4"
              d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
            />
            <path fill="#34a853" d="m11 18.08h2v3.92h-2z" />
            <path
              fill="#fbbc05"
              d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
            />
            <path
              fill="#ea4335"
              d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
            />
          </svg>
          {/* <MicrophoneIcon className="w-6 h-6" /> */}
        </div>
        <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 justify-center sm:space-x-4 sm:space-y-0">
          <button className="btn">Pesquisa Google</button>
          <button className="btn">Estou com Sorte</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
