import { getSubCategories } from '@/app/actions/get-subcat-by-cat'
import { SubCatItem } from './sub-cat-Item'

export async function SubCatCard({ cat_id }: { cat_id: number }) {
  const subcats = await getSubCategories(cat_id)

  return (
    <div className="flex flex-col gap-6 border-l-2 border-dotted border-primary p-2 px-4 font-inter">
      {subcats.length > 0 &&
        subcats.map((subcat) => (
          <SubCatItem key={subcat._id} cat_id={cat_id} subcat={subcat} />
        ))}
    </div>
  )
}
