'use client';
import useSWR from 'swr';

import Story from '@/app/components/Story';
import { getStories } from '@/app/components/useRequest';

import { usePathname } from 'next/navigation';

interface BodyProps {
  page: number;
}
export default function Body({ page }: BodyProps) {
  const { data: stories, error } = useSWR('topStories', getStories);

  const pathname = usePathname();
  console.log(pathname);
  if (error) return <></>;
  if (!stories) return <></>;
  const startIndex = (page - 1) * 30;
  const endIndex = startIndex + 30;
  const slicedStories = stories.slice(startIndex, endIndex);

  return (
    <td>
      <table border={0} cellPadding={0} cellSpacing={0}>
        <tbody>
          {slicedStories.map((storyId: number, index: number) => {
            const storyIndex = startIndex + index;
            return (
              <>
                <Story
                  key={storyIndex}
                  storyId={storyId}
                  index={storyIndex + 1}
                />
              </>
            );
          })}
          <tr className="morespace" style={{ height: '10px' }}></tr>
          <tr>
            <td colSpan={2} />
            <td className="title">
              <a href={`?p=${page + 1}`} className="morelink" rel="next">
                More
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  );
}
