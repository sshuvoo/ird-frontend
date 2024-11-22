import { Cat } from '@/app/actions/get-all-categories'
import Image from 'next/image'
import { SubCatCard } from './sub-cat-card'
import Link from 'next/link'

export function CategoryCard({ cat, cat_id }: { cat: Cat; cat_id: string }) {
  return (
    <div>
      <div className="px-3">
        <Link
          href={`/${cat.cat_id}`}
          className={`flex justify-between rounded-lg p-3 ${parseInt(cat_id) === cat.cat_id ? 'bg-icon-bg' : 'hover:bg-icon-bg'}`}
        >
          <div className="grid grid-cols-[auto,1fr] gap-2">
            <div className="flex size-14 items-center justify-center rounded-lg bg-cat-bg">
              <Image
                alt={cat.cat_name_en}
                src={'/cat-icons/' + cat.cat_icon + '.svg'}
                width={30}
                height={30}
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-base font-medium">{cat.cat_name_en}</h2>
              <p className="text-xs text-gray-500">
                Subcategory: {cat.no_of_subcat}
              </p>
            </div>
          </div>
          <div className="relative flex flex-col justify-center">
            <h2 className="text-base font-medium">{cat.no_of_dua}</h2>
            <p className="text-xs text-gray-500">Duas</p>
            <span className="absolute -left-4 h-5/6 w-[1px] bg-gray-200" />
          </div>
        </Link>
      </div>
      {parseInt(cat_id) === cat.cat_id && (
        <div className="py-3 pl-12">
          <SubCatCard cat_id={parseInt(cat_id)} />
        </div>
      )}
    </div>
  )
}
