import Image from 'next/image';

import sImage from '@/app/assets/s.gif';

interface StoryRankProps {
  storyId: number;
  index: number;
  pathType: string;
}

export default function StoryRank({ storyId, index, pathType }: StoryRankProps) {
  if (pathType === 'jobs') {
    return (
      <>
        <td align="right" valign="top" className="title">
          <span className="rank"></span>
        </td>
        <td>
          <Image src={sImage} alt={'a'} width={14} height={1} />
        </td>
      </>
    );
  } else {
    return (
      <>
        <td align="right" valign="top" className="title">
          <span className="rank">{`${index}.`}</span>
        </td>
        <td valign="top" className="votelinks">
          <center>
            <a id={`up_${storyId}`} href={`vote?id=${storyId}&amp;how=up&amp;goto=news`}>
              <div className="votearrow" title="upvote" />
            </a>
          </center>
        </td>
      </>
    );
  }
}
