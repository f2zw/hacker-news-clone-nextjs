'use client';
import useSWR from 'swr';

interface StoryParams {
  key: number;
  storyId: number;
  index: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface StoryProps {
  id: number;
  by: string;
  descendants: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

function getDomainFromUrl(url: string) {
  let result = '';
  let match;
  if (typeof url == 'undefined') {
    url = '';
  } else {
    if (
      (match = url.match(
        /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im
      ))
    ) {
      result = match[1];
      if ((match = result.match(/^[^\.]+\.(.+\..+)$/))) {
        result = match[1];
      }
    }
  }
  return result;
}

export default function Story({ storyId, index }: StoryParams) {
  const url = `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`;
  const fetcher = (url: string) => fetch(url).then(res => res.json());
  const { data: story, error } = useSWR(url, fetcher);

  if (error) return <></>;
  if (!story) return <></>;

  const domain = getDomainFromUrl(story.url);
  return (
    <>
      <tr className="athing" key={storyId} id={'' + storyId}>
        <td align="right" valign="top" className="title">
          <span className="rank">{`${index}.`}</span>
        </td>
        <td valign="top" className="votelinks">
          <center>
            <a
              id={`up_${storyId}`}
              href={`vote?id=${storyId}&amp;how=up&amp;goto=news`}
            >
              <div className="votearrow" title="upvote" />
            </a>
          </center>
        </td>
        <td className="title">
          <span className="titleline">
            <a href={`${story.url}`}>{`${story.title}`}</a>
            {domain !== '' && (
              <span className="sitebit comhead">
                {' ('}
                <a href={`from?site=${story.url}`}>
                  <span className="sitestr">{`${domain}`}</span>
                </a>
                {')'}
              </span>
            )}
          </span>
        </td>
      </tr>
      <tr>
        <td colSpan={2} />
        <td className="subtext">
          <span className="score" id="score_27000000">
            {`${story.score} ${story.score === 1 ? 'point' : 'points'}}`}
          </span>{' '}
          by{' '}
          <a href={`user?id=${story.by}`} className="hnuser">
            {`${story.by}`}
          </a>{' '}
          <span className="age">
            <a href={`item?id=${story.id}`}>1 hour ago</a>
          </span>{' '}
          | <a href={`hide?id=${story.id}&amp;goto=news`}>hide</a> |{' '}
          <a href={`item?id=${story.id}`}>
            {`${story.descendants} ${
              story.descendants === 1 ? 'comment' : 'comments'
            }}`}
          </a>
        </td>
      </tr>
      <tr className="spacer" style={{ height: '5px' }}></tr>
    </>
  );
}
