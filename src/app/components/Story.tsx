'use client';

import StoryComment from '@/app/components/Story/Comment';

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
  const isAskOrShow = pathType === 'ask' || pathType === 'show';
  return (
    <>
      <tr className="athing" key={storyId} id={'' + storyId}>
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
        <td className="subtext">
          <span className="score" id={`score_${story.id}`}>
            {`${story.points} ${story.points === 1 ? 'point' : 'points'} `}
          </span>
          <a href={`user?id=${story.user}`} className="hnuser">
            {`by ${story.user}`}
          </a>
          <span className="age">
            <a href={`item?id=${story.id}`}> {story.time_ago} | </a>
          </span>
          {!isAskOrShow && <a href={`hide?id=${story.id}&amp;goto=news`}>hide | </a>}
          <StoryComment storyId={story.id} count={story.comments_count} />
        </td>
      </tr>
      <tr className="spacer" style={{ height: '5px' }}></tr>
    </>
  );
}
