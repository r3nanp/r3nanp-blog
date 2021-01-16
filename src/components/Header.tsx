// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import Link from 'next/link'

import { GiHamburgerMenu } from 'react-icons/gi'

const Header: React.FC = () => {
  const [toggle, setToggle] = useState(true)

  return (
    <nav className="w-full flex items-center justify-between flex-wrap p-4 border-b border-b-black">
      <h1 className="font-bold text-2xl mr-4 text-black">Renan Pereira</h1>

      <div className="block md:hidden">
        <button
          onClick={() => setToggle(!toggle)}
          className="md:hidden lg:hidden flex items-center justify-between px-3 py-2 rounded text-white hover:border-white"
        >
          <GiHamburgerMenu size={20} color="#000000" />
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
              <a className="mt-4 lg:mt-0 text-black hover:underline mr-4">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="mt-4 lg:mt-0 text-black hover:underline mr-4">
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
