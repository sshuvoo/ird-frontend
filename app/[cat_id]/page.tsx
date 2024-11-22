import Image from 'next/image'
import { getDuasByCat } from '../actions/get-duas-by-cat'
import { AudioPlayer } from '../components/audio-player'
import { getAllCategories } from '../actions/get-all-categories'

// SSG
export async function generateStaticParams() {
  const cats = await getAllCategories()
  return cats.map((cat) => ({
    cat_id: cat.cat_id.toString(),
  }))
}

export default async function DuaPage({
  params,
}: {
  params: Promise<{ cat_id: string }>
}) {
  const { cat_id } = await params
  const duas = await getDuasByCat(parseInt(cat_id))

  return (
    <div className="max-h-[calc(100vh-100px)] space-y-4 overflow-y-auto 2xl:max-h-[calc(100vh-112px)]">
      {duas.length > 0 &&
        duas.map((dua) => (
          <div id={dua._id} key={dua._id} className="rounded-xl bg-white p-6">
            <div className="flex items-center gap-2">
              <Image alt="" src="/duacard.svg" width={35} height={35} />
              <h1 className="font-medium text-primary">
                {dua.id}. {dua.dua_name_en}
              </h1>
            </div>
            {dua.top_en && (
              <p className="my-5 text-justify text-[18px] font-medium leading-8">
                {dua.top_en}
              </p>
            )}
            {dua.dua_arabic && (
              <p
                style={{ direction: 'rtl', wordSpacing: '8px' }}
                className="my-10 text-justify font-me_quran text-[26px] font-medium leading-loose"
              >
                {dua.dua_arabic}
              </p>
            )}
            {dua.transliteration_en && (
              <p className="my-5 text-justify text-[18px] font-medium italic">
                <span>Transliteration:</span> {dua.transliteration_en}
              </p>
            )}
            {dua.translation_en && (
              <p className="my-10 text-justify text-[18px] font-medium">
                <span>Translation:</span> {dua.translation_en}
              </p>
            )}
            {dua.refference_en && (
              <div className="my-5">
                <p className="text-justify text-[18px] font-medium leading-8 text-primary">
                  Reference:
                </p>
                <p className="text-justify text-[18px] font-medium leading-8">
                  {dua.refference_en}
                </p>
              </div>
            )}
            <div
              className={`mt-10 flex items-center ${dua.audio ? 'justify-between' : 'justify-end'}`}
            >
              {dua.audio && <AudioPlayer url={dua.audio} />}
              <div className="flex items-center gap-8">
                <button className="size-6">
                  <Image alt="icon" src="/copy.svg" width={24} height={24} />
                  <span className="sr-only">Copy</span>
                </button>
                <button className="size-6">
                  <Image
                    alt="icon"
                    src="/bookmark-card.svg"
                    width={24}
                    height={24}
                  />
                  <span className="sr-only">Bookmark</span>
                </button>
                <button className="size-6">
                  <Image alt="icon" src="/plan.svg" width={24} height={24} />
                  <span className="sr-only">Plan</span>
                </button>
                <button className="size-6">
                  <Image alt="icon" src="/share.svg" width={24} height={24} />
                  <span className="sr-only">Share</span>
                </button>
                <button className="size-6">
                  <Image alt="icon" src="/report.svg" width={24} height={24} />
                  <span className="sr-only">Report</span>
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
