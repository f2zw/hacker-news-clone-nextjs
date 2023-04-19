import type { Metadata } from 'next';

import Body from '@/app/components/Body';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Hacker News',
    description: 'Hacker News',
    openGraph: {
      title: 'Hacker News',
      description: 'Hacker News'
    }
  };
}
export default function News() {
  return (
    <>
      <Body />
    </>
  );
}
