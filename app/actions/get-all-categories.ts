'use server'

export interface Cat {
  _id: string
  id: number
  cat_id: number
  cat_name_bn: string
  cat_name_en: string
  no_of_subcat: number
  no_of_dua: number
  cat_icon: string
}

export const getAllCategories = async () => {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/cats`)
    const json: Cat[] = await response.json()
    return json
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return []
  }
}
