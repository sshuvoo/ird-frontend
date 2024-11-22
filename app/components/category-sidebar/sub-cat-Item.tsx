'use client'

import { SubCat } from '@/app/actions/get-subcat-by-cat'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { DuaTitle } from './dua-title'

export function SubCatItem({
  cat_id,
  subcat,
}: {
  cat_id: number
  subcat: SubCat
}) {
  const searchParams = useSearchParams()
  const subcat_id = searchParams.get('sub_cat')

  return (
    <div>
      <Link
        href={`/${cat_id}/?sub_cat=${subcat.subcat_id}`}
        className={`relative text-sm font-semibold ${subcat_id === subcat.subcat_id.toString() ? 'text-primary' : 'text-[#393939]'}`}
        key={subcat._id}
      >
        {subcat.subcat_name_en}
        <span className="absolute -left-[21px] top-1 size-2 rounded-full bg-primary" />
      </Link>
      {subcat_id === subcat.subcat_id.toString() && (
        <div>
          <DuaTitle subcat_id={subcat_id}/>
        </div>
      )}
    </div>
  )
}
