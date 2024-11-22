import Image from 'next/image'
import support from '@/public/support.svg'
import { navigationData } from './navigation-data'

export function SideNavigationBar() {
  return (
    <div className="hidden h-full w-full xl:block">
      <div className="flex h-[calc(100%-40px)] min-h-[600px] w-full flex-col items-center justify-between overflow-y-auto rounded-xl bg-white py-8 shadow">
        <Image alt="dua-logo" src="/dua-logo.svg" width={50} height={50} />
        <div className="flex flex-col gap-5">
          {navigationData.map((item) => (
            <div
              key={item.id}
              className="flex size-10 items-center justify-center rounded-full bg-icon-bg transition-all hover:scale-105"
            >
              <Image
                alt="nav-icon"
                src={item.image}
                width={20}
                height={20}
                className=""
              />
            </div>
          ))}
        </div>
        <Image
          alt="supportlogo"
          src={support}
          width={50}
          height={50}
          className="rounded-xl bg-primary p-3"
        />
      </div>
    </div>
  )
}
