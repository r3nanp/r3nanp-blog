import { useState } from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-full flex items-center justify-between flex-wrap bg-gray-800 p-4 border-b border-b-black">
      <h1 className="font-bold text-2xl mr-4 text-white">Renan Pereira</h1>

      <div className="block md:hidden">
        <button
          onClick={() => setToggle(!toggle)}
          className="md:hidden lg:hidden flex items-center justify-between px-3 py-2 border rounded text-white border-teal-400 hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3 "
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          toggle ? `flex` : `hidden`
        } w-full flex items-center justify-between lg:w-auto`}
      >
        <div className="w-full flex-grow sm:flex sm:items-center sm:w-auto">
          <div className="lg:flex-grow">
            <Link href="/">
              <a className="mt-4 lg:mt-0 text-white hover:underline mr-4">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="mt-4 lg:mt-0 text-white hover:underline mr-4">
                Sobre mim
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export { Header }
