import { StoryProps } from '../Story';
import StoryComment from './Comment';

interface StorySubTextProps {
  index: number;
  pathType: string;
  story: StoryProps;
}

export default function StorySubText({ index, pathType, story }: StorySubTextProps) {
  index;
  const isAskOrShow = pathType === 'ask' || pathType === 'show';
  if (pathType === 'jobs') {
    return (
      <>
        <td className="subtext">
          <span className="age">
            <a href={`item?id=${story.id}`}> {story.time_ago} </a>
          </span>
        </td>
      </>
    );
  } else if (pathType === 'newest') {
    return (
      <>
        <td className="subtext">
          <span className="score" id={`score_${story.id}`}>
            {`${story.points} ${story.points === 1 ? 'point' : 'points'} `}
          </span>
          {`by `}
          <a href={`user?id=${story.user}`} className="hnuser">
            {`${story.user}`}
          </a>
          <span className="age">
            <a href={`item?id=${story.id}`}> {story.time_ago}</a>
          </span>
          {' | '}
          {!isAskOrShow && <a href={`hide?id=${story.id}&amp;goto=news`}>hide</a>}
          {' | '}
          <a
            className="hnpast"
            href={`https://hn.algolia.com/?query=${story.title}&type=story&dateRange=all&sort=byDate&storyText=false&prefix&page=0`}
          >
            {'past'}
          </a>
          {' | '}
          <StoryComment storyId={story.id} count={story.comments_count} />
        </td>
      </>
    );
  } else {
    return (
      <>
        <td className="subtext">
          <span className="score" id={`score_${story.id}`}>
            {`${story.points} ${story.points === 1 ? 'point' : 'points'} `}
          </span>
          {`by `}
          <a href={`user?id=${story.user}`} className="hnuser">
            {`${story.user}`}
          </a>
          <span className="age">
            <a href={`item?id=${story.id}`}> {story.time_ago}</a>
            {' | '}
          </span>
          {!isAskOrShow && <a href={`hide?id=${story.id}&amp;goto=news`}>{'hide | '}</a>}
          <StoryComment storyId={story.id} count={story.comments_count} />
        </td>
      </>
    );
  }
}
