'use client';

import russia from '@/utils/russia';
import sortArr from '@/utils/sortArr';
import { useRouter } from 'next/navigation';
import './CityLink.css';

export default function CityLink({ firstLetter }) {
  const router = useRouter();
  const showList = [];
  sortArr(russia, showList, firstLetter);

  return (
    <ul className="cityLink-box h-60 overflow-y-scroll">
      {showList.map(city => {
        return (
          <li key={Math.random()} className="px-1 ">
            <button
              type="button"
              onClick={() => router.push(`/search/${encodeURI(city)}`)}
              className="font-light text-start opacity-80 hover:opacity-100 relative sm:text-sm"
            >
              &#183; {city}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
