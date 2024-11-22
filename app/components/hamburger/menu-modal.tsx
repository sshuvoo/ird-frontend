import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP)

export function MenuModal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(ref.current, { xPercent: -100 })
  })

  return (
    <div
      ref={ref}
      className="h-full w-[300px] bg-white shadow 2xl:h-[calc(100vh-152px)]"
    >
      <div className="flex h-14 items-center justify-center bg-primary font-medium text-white">
        <h3>Categories</h3>
      </div>
      <form className="relative px-4 py-4">
        <input
          className="h-12 w-full rounded-md border px-4 pl-10 text-sm placeholder:font-medium focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Search by Dua Name"
          type="text"
        />
        <svg
          className="absolute left-7 top-1/2 -translate-y-1/2 stroke-gray-500"
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
      </form>
      {children}
    </div>
  )
}
