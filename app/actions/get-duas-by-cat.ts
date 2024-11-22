'use server'

export interface Dua {
  _id: string
  id: number
  cat_id: number
  subcat_id: number
  dua_id: number
  dua_name_bn: string
  dua_name_en: string
  top_bn: string
  top_en: string
  dua_arabic: string | null
  dua_indopak: string | null
  transliteration_bn: string | null
  transliteration_en: string | null
  translation_bn: string | null
  translation_en: string | null
  bottom_bn: string | null
  bottom_en: string | null
  refference_bn: string | null
  refference_en: string | null
  audio: string | null
}

export const getDuasByCat = async (cat_id: number) => {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/duas/cat/${cat_id}`)
    const json: Dua[] = await response.json()
    return json
  } catch (error) {
    console.log(error)
    return []
  }
}
