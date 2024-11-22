'use server'

import { Dua } from './get-duas-by-cat'

export const getDuasBySubCat = async (subcat_id: string) => {
  try {
    const response = await fetch(
      `${process.env.SERVER_URL}/duas/subcat/${subcat_id}`
    )
    const json: Dua[] = await response.json()
    return json
  } catch (error) {
    console.log(error)
    return []
  }
}
