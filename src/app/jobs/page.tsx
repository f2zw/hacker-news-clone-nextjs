import type { Metadata } from 'next';

import Body from '@/app/components/Body';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'jobs | Hacker News',
    description: 'Jobs HN'
  };
}
export default function Jobs() {
  return (
    <>
      <Body />
    </>
  );
}
