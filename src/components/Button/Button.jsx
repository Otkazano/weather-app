import Link from 'next/link'

export default function Button ({ link, text }) {
  return (
    <div className='w-[768px] flex justify-center m-20 ml-auto z-10'>
      <Link
        href={link}
        className='w-[500px] h-20 rounded-lg text-xl flex justify-center
         items-center text-white tracking-widest bg-[#7e609c] drop-shadow-lg shadow-2xl opacity-90 relative hover:opacity-100 active:top-[5px]'
      >
        {text}
      </Link>
    </div>
  )
}
