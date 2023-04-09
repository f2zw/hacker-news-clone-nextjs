'use client';

import { useSearchParams } from 'next/navigation';

import Stories from '@/app/components/Stories';

export default function News() {
  const searchParams = useSearchParams();

  const page = searchParams.get('p') || '1';

  return (
    <>
      <Stories page={parseInt(page)} />
    </>
  );
}
