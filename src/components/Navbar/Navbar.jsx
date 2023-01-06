import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
  return (
    <>
    <div className="flex justify-center mx-10  ">
    <nav className="fixed z-[9999999] mt-4 mx-4 w-full xl:max-w-[1850px] lg:max-w-[1400px] bg-white shadow-xl xl:rounded-[50px] rounded-[20px] drop-shadow-2xl">
        <div className="justify-between px-4 mx-auto xl:max-w-[1850px] lg:max-w-[1400px] md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-1 md:py-2 md:block">
              <Link href="/" passHref className='flex'>
                <Image className='' src='/images/logo/Colored.png' width={30} height={30} alt='logo'/>
                <h2 className="flex items-center text-2xl text-n-blue font-bold font-poppins">Gantari Mengwi</h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-n-blue"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-n-blue"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-n-blue">
                  <Link href="/wisata-mengwi">
                    <div className="font-poppins font-semibold">Wisata Mengwi</div>
                  </Link>
                </li>
                <li className="text-n-blue">
                  <Link href="/komoditas-mengwi">
                    <div className="font-poppins font-semibold">Komoditas Mengwi</div>
                  </Link>
                </li>
                <li className="text-n-blue">
                  <Link href="/tentang-mengwi">
                    <div className="font-poppins font-semibold">Tentang Mengwi</div>
                  </Link>
                </li>
                <li className="text-n-blue">
                  <Link href="/umkm-mengwi">
                    <div className="font-poppins font-semibold">UMKM Mengwi</div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </div>
      </>
  )
}

export default Navbar