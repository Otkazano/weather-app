import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import CitiesList from '@/components/CitiesList/CitiesList';
import CurrentLocation from '@/components/CurrentLocation/CurrentLocation';
import SearchInput from '@/components/SearchInput/SearchInput';

export default function SearchPage() {
  return (
    <main className="flex flex-col text-white grow max-w-[1440px] mx-auto w-full">
      <section className="flex justify-between">
        <h1 hidden={true}>Страница поиска города</h1>
        <BreadCrumbs />
        <CurrentLocation />
      </section>
      <SearchInput />
      <CitiesList />
    </main>
  );
}
