import Image from 'next/image'

export function SettingsSidebar() {
  return (
    <div className="hidden h-full 2xl:flex">
      <div className="h-[calc(100%-40px)] w-full rounded-xl">
        <div className="flex items-center justify-end gap-2 px-4">
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
        <div className="mt-6">
          <div className="h-[calc(100vh-152px)] rounded-xl bg-white px-4 shadow">
            <h2 className="pt-8 text-center text-xl">Settings</h2>
            <div className="mt-16 space-y-4">
              <div className="rounded-lg shadow">
                <div className="cursor-pointer">
                  <div className="flex w-full flex-row rounded-lg bg-cat-bg transition delay-[10ms] duration-300">
                    <div className="w-1 rounded-bl-lg rounded-tl-lg bg-primary"></div>
                    <div className="flex w-full flex-row items-center p-2">
                      <div className="dark:bg-dark-bg mr-5 flex items-center justify-center rounded-full bg-icon-bg p-2">
                        <Image
                          alt=""
                          src="/language.svg"
                          width={24}
                          height={24}
                        />
                      </div>
                      <p className="xs:text-sm lg-min:text-sm style-Kalpurush text-start text-base font-medium leading-5 text-primary">
                        Language Settings
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="rounded-b-lg py-6">
                    <div className="mx-4 flex flex-row justify-center gap-x-3">
                      <button className="w-29 xs:w-full h-10 rounded-md bg-primary text-sm text-white sm:w-full">
                        English
                      </button>
                      <button className="dark:bg-dark-bg-lite w-29 xs:w-full h-10 rounded-md border border-solid border-[#cccdcf] text-sm text-black sm:w-full">
                        বাংলা
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-md bg-cat-bg">
                <div className="cursor-pointer">
                  <div className="bg-dua-bg dark:bg-dark-bg-dark flex w-full flex-row rounded-lg">
                    <div className="w-1 rounded-bl-lg rounded-tl-lg"></div>
                    <div className="flex w-full flex-row items-center p-2">
                      <div className="dark:bg-dark-bg mr-5 flex items-center justify-center rounded-full bg-icon-bg p-2">
                        <Image
                          alt=""
                          src="/general.svg"
                          width={24}
                          height={24}
                        />
                      </div>
                      <p className="xs:text-sm lg-min:text-sm style-Kalpurush text-start text-base font-medium leading-5 text-gray-500">
                        General Settings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-md bg-cat-bg">
                <div className="cursor-pointer">
                  <div className="bg-dua-bg dark:bg-dark-bg-dark flex w-full flex-row rounded-lg">
                    <div className="w-1 rounded-bl-lg rounded-tl-lg"></div>
                    <div className="flex w-full flex-row items-center p-2">
                      <div className="dark:bg-dark-bg mr-5 flex items-center justify-center rounded-full bg-icon-bg p-2">
                        <Image alt="" src="/font.svg" width={24} height={24} />
                      </div>
                      <p className="xs:text-sm lg-min:text-sm style-Kalpurush text-start text-base font-medium leading-5 text-gray-500">
                        Font Settings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-md bg-cat-bg">
                <div className="cursor-pointer">
                  <div className="bg-dua-bg dark:bg-dark-bg-dark flex w-full flex-row rounded-lg">
                    <div className="w-1 rounded-bl-lg rounded-tl-lg"></div>
                    <div className="flex w-full flex-row items-center p-2">
                      <div className="dark:bg-dark-bg mr-5 flex items-center justify-center rounded-full bg-icon-bg p-2">
                        <Image alt="" src="/font.svg" width={24} height={24} />
                      </div>
                      <p className="xs:text-sm lg-min:text-sm style-Kalpurush text-start text-base font-medium leading-5 text-gray-500">
                        Appearance Settings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
