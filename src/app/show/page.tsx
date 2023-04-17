'use client';

import { usePathname, useSearchParams } from 'next/navigation';

import Body from '@/app/components/Body';

export default function Show() {
  const searchParams = useSearchParams();

  const pathname = usePathname();
  const pathType = pathname.slice(1) !== '' ? pathname.slice(1) : 'news';
  const page = searchParams.get('p') || '1';

  return (
    <>
      <Body page={parseInt(page)} pathType={pathType} />
    </>
  );
}
