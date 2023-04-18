import type { Metadata } from 'next';

import Body from '@/app/components/Body';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Ask | Hacker News',
    description: 'Ask HN'
  };
}
export default function Ask() {
  return (
    <>
      <Body />
    </>
  );
}
