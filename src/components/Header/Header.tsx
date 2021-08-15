import Link from "next/link";
import { VFC } from "react";

export const Header: VFC = () => {
  return (
    <header className=" w-screen font-mono">
      <div className="flex items-center pl-4 h-12">
        <div className="align-center space-x-4">
          <Link href="/">
            <a className="text-blue-800 px-8  py-2 rounded text-xl   ">
              kurihara dev
            </a>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center pl-8 h-12">
        <div className="flex space-x-4">
          <Link href="/">
            <a className="text-gray-600  hover:bg-gray-200 px-3 py-2 rounded hover:text-blue-600 focus:text-blue-600 hover:border-blue-500 focus:border-blue-500">
              Home
            </a>
          </Link>
          <Link href="/blogs">
            <a className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded hover:text-blue-600 focus:text-blue-600 hover:border-blue-500 focus:border-blue-500">
              Blog
            </a>
          </Link>
          <Link href="/profile">
            <a className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded hover:text-blue-600 focus:text-blue-600 hover:border-blue-500 focus:border-blue-500">
              Profile
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};
