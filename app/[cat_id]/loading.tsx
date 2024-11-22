export default function Loading() {
  return (
    <div className="rounded-2lg dark:bg-dark-bg mb-5 bg-white">
      <div className="p-6">
        <div>
          <div className="flex flex-row items-center justify-start">
            <div className="dark:bg-dark-bg-lite mr-4 h-9 w-9 animate-pulse rounded-full bg-icon-bg"></div>
            <div className="dark:bg-dark-bg-lite h-4 w-44 animate-pulse rounded-lg bg-icon-bg"></div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="mt-5 w-full">
            <div className="dark:bg-dark-bg-lite my-5 h-3 w-full animate-pulse rounded-lg bg-icon-bg"></div>
            <div className="dark:bg-dark-bg-lite my-5 h-3 w-full animate-pulse rounded-lg bg-icon-bg"></div>
            <div className="dark:bg-dark-bg-lite w-150 xs:w-full my-5 h-3 animate-pulse rounded-lg bg-icon-bg sm:w-full"></div>
            <div className="dark:bg-dark-bg-lite mt-10 h-3 w-20 animate-pulse rounded-lg bg-icon-bg"></div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-row content-center items-center justify-between px-6 py-3">
          <div className="dark:bg-dark-bg-lite h-11 w-11 animate-pulse rounded-full bg-icon-bg"></div>
          <div className="xs:gap-x-4 flex flex-row gap-x-8">
            <div className="dark:bg-dark-bg-lite undefined h-7 w-7 animate-pulse rounded-lg bg-icon-bg"></div>
            <div className="dark:bg-dark-bg-lite undefined h-7 w-7 animate-pulse rounded-lg bg-icon-bg"></div>
            <div className="dark:bg-dark-bg-lite undefined h-7 w-7 animate-pulse rounded-lg bg-icon-bg"></div>
            <div className="dark:bg-dark-bg-lite undefined h-7 w-7 animate-pulse rounded-lg bg-icon-bg"></div>
            <div className="dark:bg-dark-bg-lite undefined h-7 w-7 animate-pulse rounded-lg bg-icon-bg"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
