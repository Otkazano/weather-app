import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import CitiesList from '@/components/CitiesList/CitiesList'
import SearchInput from '@/components/SearchInput/SearchInput'

export default function SearchPage () {
  return (
    <main className='flex flex-col text-white grow max-w-[1440px] mx-auto w-full'>
      <BreadCrumbs />
      <SearchInput />
      <CitiesList />
    </main>
  )
}
