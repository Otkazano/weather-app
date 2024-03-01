'use client'
import { useRouter } from 'next/navigation'

export default function GlobalError ({}) {
  const router = useRouter()

  return (
    <main className='flex flex-col grow text-white mx-auto justify-center gap-6 w-full'>
      <h1 className='drop-shadow-lg text-9xl text-center font-semibold'>500</h1>
      <h2 className='drop-shadow-lg text-4xl text-center font-semibold'>
        Ошибка на стороне сервера
      </h2>
      <button
        type='button'
        onClick={() => router.back()}
        className='w-[500px] mx-auto h-20 rounded-lg text-xl flex justify-center
         items-center text-white tracking-widest bg-[#7e609c] drop-shadow-lg shadow-2xl opacity-90 relative hover:opacity-100 active:top-[5px]'
      >
        Вернуться на предыдущую страницу
      </button>
    </main>
  )
}
