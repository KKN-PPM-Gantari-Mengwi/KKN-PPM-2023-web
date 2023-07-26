import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div className="flex justify-center mx-10  ">
        <nav className="fixed z-[9999999] mt-4 mx-4 w-full xl:max-w-[1850px] lg:max-w-[1400px] bg-white shadow-xl xl:rounded-[50px] rounded-[20px] drop-shadow-2xl">
          <div className="justify-between px-4 mx-auto xl:max-w-[1850px] lg:max-w-[1400px] md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between md:block">
                <Link href="/" passHref className="flex">
                  <Image
                    className=""
                    src="/images/logo/Colored.png"
                    width={30}
                    height={30}
                    alt="logo"
                  />
                  <h2 className="flex items-center text-xl text-n-blue font-bold font-poppins">
                    Gantari Mengwi
                  </h2>
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
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-n-blue">
                    <Link href="/wisata-mengwi">
                      <div className="font-poppins font-semibold ">
                        Wisata Mengwi
                      </div>
                    </Link>
                  </li>
                  {/* <li className="text-n-blue">
                    <Link href="/layanan-gawat-darurat-mengwi">
                      <div className="font-poppins font-semibold ">
                        Layanan Kesehatan Mengwi
                      </div>
                    </Link>
                  </li> */}
                  <li className="text-n-blue">
                    <Link href="/pemetaan-mengwi">
                      <div className="font-poppins font-semibold ">
                        Pemetaan Mengwi
                      </div>
                    </Link>
                  </li>
                  {/* <li className="text-n-blue">
                  <Link href="/umkm-mengwi">
                    <div className="font-poppins font-semibold ">UMKM Mengwi</div>
                  </Link>
                </li> */}
                  <li>
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 font-poppins font-semibold text-n-blue shadow-sm">
                        Layanan Kesehatan Mengwi
                          {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="/layanan-gawat-darurat-mengwi"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-n-blue",
                                    "block px-4 py-2 font-semibold"
                                  )}
                                >
                                  Layanan Gawat Darurat
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="/edukasi-rabies"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-n-blue",
                                    "block px-4 py-2 font-semibold"
                                  )}
                                >
                                  Edukasi Rabies
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </li>
                  <li>
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 font-poppins font-semibold text-n-blue shadow-sm">
                        Desa 
                          {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute md:right-0 -right-40 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="/desa-baha"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-n-blue",
                                    "block px-4 py-2 font-semibold"
                                  )}
                                >
                                  Desa Baha
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="/desa-sobangan"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-n-blue",
                                    "block px-4 py-2 font-semibold"
                                  )}
                                >
                                  Desa Sobangan
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
