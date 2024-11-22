'use client'

import Image from 'next/image'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { SettingsModal } from './settings-modal'

export function SettingsButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => void setIsOpen(true)}>
        <Image alt="" src="/settings.svg" width={24} height={24} />
      </button>
      {isOpen &&
        createPortal(
          <div
            onClick={() => {
              setIsOpen(false)
            }}
            className="fixed inset-0 flex justify-end bg-black/20"
          >
            <SettingsModal />
          </div>,
          document.getElementById('modal')!
        )}
    </>
  )
}
