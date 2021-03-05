import { useEffect, RefObject } from 'react'

interface IUseClickOutsideProps {
  ref: RefObject<HTMLDivElement>
  closeMenu: () => void
}

export const useOnClickOutside = ({
  ref,
  closeMenu,
}: IUseClickOutsideProps): void => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target &&
        ref.current.contains(event.target as Node)
      ) {
        return
      }
      closeMenu()
    }

    document.addEventListener('mousedown', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, closeMenu])
}
