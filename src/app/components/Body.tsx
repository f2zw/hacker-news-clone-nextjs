'use client';
import useSWR from 'swr';

import BodyNotice from '@/app/components//Body/Notice';
import Stories from '@/app/components/Stories';
import { fetcher } from '@/app/components/useRequest';
interface BodyProps {
  page: number;
  pathType: string;
}

export default function Body({ page, pathType }: BodyProps) {
  const url = `https://api.hackerwebapp.com/${pathType}?page=${page}`;

  const { data: stories, error } = useSWR(url, fetcher);

  if (error) return <></>;
  if (!stories) return <></>;

  return (
    <td>
      <BodyNotice pathType={pathType} />
      <Stories page={page} stories={stories} pathType={pathType} />
    </td>
  );
}
