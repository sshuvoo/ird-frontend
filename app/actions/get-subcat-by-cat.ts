'use server'

export interface SubCat {
  _id: string
  id: number
  cat_id: number
  subcat_id: number
  subcat_name_bn: string
  subcat_name_en: string
  no_of_dua: number
}

export const getSubCategories = async (cat_id: number) => {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/sub-cats/${cat_id}`)
    const json: SubCat[] = await response.json()
    return json
  } catch (error) {
    console.log(error)
    return []
  }
}
