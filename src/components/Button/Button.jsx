import Link from 'next/link'

export default function Button ({ link, text }) {
  return (
    <div className='max-w-[1020px] w-full flex justify-center m-16 mx-auto p-12 z-10 md:my-5 sm:my-2'>
      <Link
        href={link}
        className='w-full h-20 rounded-lg text-xl flex justify-center
         items-center text-white tracking-widest bg-[#7e609c] drop-shadow-lg shadow-2xl opacity-90 relative hover:opacity-100 active:top-[5px] sm:text-lg'
      >
        {text}
      </Link>
    </div>
  )
}
