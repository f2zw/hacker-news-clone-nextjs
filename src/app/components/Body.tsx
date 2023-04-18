'use client';

import useSWR from 'swr';

import { usePathname, useSearchParams } from 'next/navigation';

import BodyNotice from '@/app/components//Body/Notice';
import Stories from '@/app/components/Stories';
import { fetcher } from '@/app/components/useRequest';

export default function Body() {
  const searchParams = useSearchParams();

  const pathname = usePathname();
  const pathType = pathname.slice(1) !== '' ? pathname.slice(1) : 'news';
  const page = searchParams.get('p') || '1';

  const url = `https://api.hackerwebapp.com/${pathType}?page=${page}`;

  const { data: stories, error } = useSWR(url, fetcher);

  if (error) return <></>;
  if (!stories) return <></>;

  return (
    <td>
      <BodyNotice pathType={pathType} />
      <Stories page={parseInt(page)} stories={stories} pathType={pathType} />
    </td>
  );
}
