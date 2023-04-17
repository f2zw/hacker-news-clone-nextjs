'use client';

import StoryRank from './Story/Rank';
import StorySubText from './Story/SubText';

interface StoryParams {
  key: number;
  storyId: number;
  index: number;
  story: StoryProps;
  pathType: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface StoryProps {
  id: number;
  title: string;
  points: number;
  user: string;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url: string;
  domain: string;
}

export default function Story({ storyId, index, story, pathType }: StoryParams) {
  return (
    <>
      <tr className="athing" key={storyId} id={'' + storyId}>
        <StoryRank storyId={storyId} index={index} pathType={pathType} />
        <td className="title">
          <span className="titleline">
            <a href={`${story.url}`}>{`${story.title}`}</a>
            {story.domain !== '' && story.domain !== undefined && (
              <span className="sitebit comhead">
                <a href={`from?site=${story.url}`}>
                  <span className="sitestr">{` (${story.domain})`}</span>
                </a>
              </span>
            )}
          </span>
        </td>
      </tr>
      <tr>
        <td colSpan={2} />
        <StorySubText index={index} pathType={pathType} story={story} />
      </tr>
      <tr className="spacer" style={{ height: '5px' }}></tr>
    </>
  );
}
