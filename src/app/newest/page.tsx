import type { Metadata } from 'next';

import Body from '@/app/components/Body';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'New Links | Hacker News',
    description: 'The newest stories on Hacker News',
    openGraph: {
      title: 'New Links | Hacker News',
      description: 'The newest stories on Hacker News'
    }
  };
}

export default function Newest() {
  return (
    <>
      <Body />
    </>
  );
}
