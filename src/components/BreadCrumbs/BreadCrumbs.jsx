'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function BreadCrumbs() {
  const router = useRouter();
  const location = usePathname();
  const pages = location.split(['/']);

  return (
    <ul className="flex gap-3 p-5 text-white drop-shadow-lg text-base md:p-3 md:gap-2 sm:text-xs sm:flex-col sm:gap-0 ">
      <li>
        <button
          type="button"
          onClick={() => router.push('/')}
          className="relative opacity-70 hover:opacity-100 sm:text-start h-fit max-w-[300px]"
        >
          Домашнаяя страница
        </button>
      </li>
      {pages.map(page => {
        if (page === '') {
          return;
        } else if (page === 'search') {
          return (
            <li key={Math.random()} className="flex gap-3 md:gap-2 sm:gap-0 sm:flex-col ">
              <p className="opacity-70 w-fit sm:rotate-90 sm:text-start"> &gt; </p>
              <button
                type="button"
                onClick={() => router.push(`/${page}`)}
                className="relative h-fit opacity-70 hover:opacity-100 sm:text-start max-w-[300px]"
              >
                Страница поиска
              </button>
            </li>
          );
        } else {
          return (
            <li key={Math.random()} className="flex gap-3 md:gap-2 sm:gap-0 sm:flex-col ">
              <p className="opacity-70 w-fit sm:rotate-90 sm:text-start"> &gt; </p>
              <button
                type="button"
                onClick={() => router.push(`/search/${page}`)}
                className="relative opacity-70 hover:opacity-100 max-w-[300px] truncate sm:text-start h-fit"
              >
                {decodeURI(page)}
              </button>
            </li>
          );
        }
      })}
    </ul>
  );
}
