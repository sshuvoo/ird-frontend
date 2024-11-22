import Image from 'next/image'
import { CategorySidebar } from '../components/category-sidebar'
import { SettingsButton } from '../components/settings-button'
import { HamburgerMenu } from '../components/hamburger'

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ cat_id: string }>
}) {
  const { cat_id } = await params

  return (
    <div className="h-full">
      <div className="hidden items-center justify-between xl:flex">
        <h2 className="text-2xl">Duas Page</h2>
        <div className="flex items-center">
          <form className="relative w-[350px]">
            <input
              className="h-12 w-full rounded-md px-4 text-sm shadow placeholder:font-medium focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Search by Dua Name"
              type="text"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 flex h-10 w-14 -translate-y-1/2 items-center justify-center rounded-md bg-gray-100"
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
          <div className="flex w-[200px] items-center justify-end gap-2 px-4 2xl:hidden">
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
          <div className="2xl:hidden">
            <SettingsButton />
          </div>
        </div>
      </div>
      <HamburgerMenu>
        <CategorySidebar cat_id={cat_id} />
      </HamburgerMenu>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[350px,1fr] xl:mt-6">
        <div className="hidden h-[calc(100vh-115px)] rounded-xl bg-white shadow lg:block 2xl:h-[calc(100vh-152px)]">
          <div className="flex h-14 items-center justify-center rounded-t-xl bg-primary font-medium text-white">
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
          <CategorySidebar cat_id={cat_id} />
        </div>
        {children}
      </div>
    </div>
  )
}
