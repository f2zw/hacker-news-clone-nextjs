import type { Metadata } from 'next';

import Body from '@/app/components/Body';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Show | Hacker News',
    description: 'Show HN'
  };
}

export default function Show() {
  return (
    <>
      <Body />
    </>
  );
}
