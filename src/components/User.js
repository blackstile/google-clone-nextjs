import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

function User({ className }) {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div
          className={`relative cursor-pointer items-center justify-center flex ${className}`}
          onClick={signOut}
        >
          <div className="absolute z-10">
            <svg
              className="opacity-100"
              focusable="false"
              height="40px"
              version="1.1"
              viewBox="0 0 40 40"
              width="40px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                fill="#F6AD01"
                d="M4.02,28.27C2.73,25.8,2,22.98,2,20c0-2.87,0.68-5.59,1.88-8l-1.72-1.04C0.78,13.67,0,16.75,0,20c0,3.31,0.8,6.43,2.23,9.18L4.02,28.27z"
              />
              <path
                fill="#249A41"
                d="M32.15,33.27C28.95,36.21,24.68,38,20,38c-6.95,0-12.98-3.95-15.99-9.73l-1.79,0.91C5.55,35.61,12.26,40,20,40c5.2,0,9.93-1.98,13.48-5.23L32.15,33.27z"
              />
              <path
                fill="#3174F1"
                d="M33.49,34.77C37.49,31.12,40,25.85,40,20c0-5.86-2.52-11.13-6.54-14.79l-1.37,1.46C35.72,9.97,38,14.72,38,20c0,5.25-2.26,9.98-5.85,13.27L33.49,34.77z"
              />
              <path
                fill="#E92D18"
                d="M20,2c4.65,0,8.89,1.77,12.09,4.67l1.37-1.46C29.91,1.97,25.19,0,20,0l0,0C12.21,0,5.46,4.46,2.16,10.96L3.88,12C6.83,6.08,12.95,2,20,2"
              />
            </svg>
          </div>
          <Image
            className="absolute rounded-full bg-gray-200 cursor-pointer p-8"
            width={32}
            height={32}
            src={session.user.image}
            alt={session.user.name}
          />
        </div>
      </>
    );
  }
  return (
    <>
      <button
        className={`bg-blue-500 text-white px-6 py-2 max-h-10 font-medium rounded-md hover:brightness-110 hover:shadow-md ${className}`}
        onClick={signIn}
      >
        Sign in
      </button>
    </>
  );
}

export default User;
