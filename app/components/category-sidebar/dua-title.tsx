import { Dua } from '@/app/actions/get-duas-by-cat'
import { getDuasBySubCat } from '@/app/actions/get-duas-by-subcat'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function DuaTitle({ subcat_id }: { subcat_id: string }) {
  const [duas, setDuas] = useState<Dua[]>([])

  useEffect(() => {
    let ignore = false
    const startFetching = async () => {
      try {
        const res = await getDuasBySubCat(subcat_id)
        if (!ignore) {
          setDuas(res)
        }
      } catch (error) {
        console.log(error)
      }
    }
    startFetching()
    return () => {
      ignore = true
    }
  }, [subcat_id])

  return (
    <div className="space-y-6 px-1 py-4">
      {duas.length > 0 &&
        duas.map((dua) => (
          <div
            // href={`#${dua._id}`}
            key={dua._id}
            className="grid grid-cols-[auto,1fr] gap-2 text-xs font-medium"
          >
            <div className="size-4 -translate-y-2">
              <Image alt="icon" src="/duaarrow.svg" width={16} height={16} />
            </div>
            <div>{dua.dua_name_en}</div>
          </div>
        ))}
    </div>
  )
}
