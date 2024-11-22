'use client'

import { useState } from 'react'
import { createPortal } from 'react-dom'
import { MenuModal } from './menu-modal'

export function HamburgerMenu({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div className="mb-5 flex cursor-pointer flex-row items-center justify-between rounded-lg bg-white px-5 py-4 lg:hidden">
        <button
          onClick={() => void setIsOpen(true)}
          className="flex gap-x-2 font-medium leading-[25px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
          Dua's importance
        </button>
      </div>
      {isOpen &&
        createPortal(
          <div
            onClick={() => {
              setIsOpen(false)
            }}
            className="fixed inset-0 flex bg-black/20"
          >
            <MenuModal>{children}</MenuModal>
          </div>,
          document.getElementById('modal')!
        )}
    </div>
  )
}
