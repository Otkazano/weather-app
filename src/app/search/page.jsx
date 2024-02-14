import Link from 'next/link'

export default function SearchPage () {
  return (
    <>
      <h1 className='mt-auto text-center p-2 text-2xl'>Секция дополняется</h1>
      <Link
        href='/'
        className='mx-auto mb-auto p-2 text-center border w-fit hover:opacity-50'
      >
        Вернуться на домашнюю страницу
      </Link>
    </>
  )
}
