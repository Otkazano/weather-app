'use client'
import { useRouter } from 'next/navigation'

export default function NotFound ({}) {
  const router = useRouter()

  return (
    <main className='flex flex-col grow text-white mx-auto justify-center gap-6 w-full p-5'>
      <h1 className='drop-shadow-lg text-9xl text-center font-semibold sm:text-8xl'>404</h1>
      <h2 className='drop-shadow-lg text-4xl text-center font-semibold sm:text-2xl'>
        Страница не найдена
      </h2>
      <button
        type='button'
        onClick={() => router.back()}
        className='max-w-[500px] p-1 w-full mx-auto h-20 rounded-lg text-xl flex justify-center
         items-center text-white tracking-widest bg-[#7e609c] drop-shadow-lg shadow-2xl opacity-90 relative hover:opacity-100 active:top-[5px] sm:text-base sm:max-w-[400px]'
      >
        Вернуться на предыдущую страницу
      </button>
    </main>
  )
}
