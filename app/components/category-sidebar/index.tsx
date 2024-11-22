import { getAllCategories } from '@/app/actions/get-all-categories'
import { CategoryCard } from './cat-card'

export async function CategorySidebar({ cat_id }: { cat_id: string }) {
  const categories = await getAllCategories()

  return (
    <div className="max-h-[calc(100%-136px)] space-y-2 overflow-y-auto">
      {categories.length > 0 &&
        categories.map((cat) => (
          <CategoryCard cat_id={cat_id} key={cat._id} cat={cat} />
        ))}
    </div>
  )
}
