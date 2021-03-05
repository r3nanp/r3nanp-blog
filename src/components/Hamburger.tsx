import { ButtonHTMLAttributes, FC } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

interface HamburgerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  open: boolean
  setOpen: (toggle: boolean) => void
}

const Hamburger: FC<HamburgerProps> = ({ open, setOpen, ...rest }) => {
  return (
    <button
      onClick={() => setOpen(!open)}
      className={`${
        open ? 'flex' : 'hidden'
      } items-center justify-between px-3 py-2 rounded text-white hover:border-white`}
      {...rest}
    >
      <GiHamburgerMenu size={20} color="#000000" />
    </button>
  )
}

export { Hamburger }
