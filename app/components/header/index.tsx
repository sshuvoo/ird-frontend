import Image from 'next/image'
import { SettingsButton } from '../settings-button'

export function Header() {
  return (
    <div className="flex items-center justify-between bg-white p-4 xl:hidden">
      <div className="hidden items-center gap-3 md:flex">
        <Image alt="dua-logo" src="/dua-logo.svg" width={50} height={50} />
        <h2 className="text-2xl">Dua & Ruqyah</h2>
      </div>
      <div className="items-center gap-3 md:hidden">
        <h2 className="text-[18px]">Duas Page</h2>
      </div>
      <div className="flex items-center gap-4">
        <form className="relative hidden w-[350px] md:block">
          <input
            className="h-12 w-full rounded-md bg-gray-100 px-4 text-sm shadow placeholder:font-medium focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Search by Dua Name"
            type="text"
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 flex h-10 w-14 -translate-y-1/2 items-center justify-center rounded-md bg-white"
          >
            <svg
              className="stroke-gray-500"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L15 15L21 21ZM17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
        <SettingsButton />
        <div className="hidden items-center justify-end gap-2 md:flex 2xl:hidden">
          <Image alt="" src="/profile.svg" width={45} height={45} />
          <svg
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.79241 5.97063C5.3921 6.49064 4.6079 6.49064 4.20759 5.97063L1.04322 1.85999C0.537025 1.20243 1.00579 0.25 1.83563 0.25L8.16437 0.250001C8.99421 0.250001 9.46298 1.20243 8.95678 1.86L5.79241 5.97063Z"
              fill="#868686"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}
