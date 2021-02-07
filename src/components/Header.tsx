// eslint-disable-next-line no-use-before-define
import React, { useRef, useState } from 'react'
import Link from 'next/link'

import { useOnClickOutside } from '../hooks/useClickOutside'
import { Hamburger } from './Hamburger'

const Header: React.FC = () => {
  const [open, setOpen] = useState(true)
  const headerRef = useRef<HTMLDivElement>(null)
  useOnClickOutside(headerRef, () => setOpen(false))

  return (
    <header ref={headerRef} className="sticky top-0 z-10 bg-white w-full flex items-center justify-between flex-wrap p-4 border-b border-b-black">
      <h1 className="font-bold text-2xl mr-4 text-black">Renan Pereira</h1>

      <Hamburger open={open} setOpen={setOpen} />

      <div
        className={`${
          open ? `hidden` : `block`
        } w-full lg:w-auto`}
      >
        <nav className="w-full flex-grow sm:flex sm:items-center sm:w-auto">
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
        </nav>
      </div>
    </header>
  )
}

export { Header }
