interface StoryCommentProps {
  storyId: number;
  count: number;
}

export default function StoryComment({ storyId, count }: StoryCommentProps) {
  if (count === 0) {
    return <a href={`item?id=${storyId}`}>{'discuss'}</a>;
  } else if (count === 1) {
    return <a href={`item?id=${storyId}`}>{`${count} comment`}</a>;
  } else {
    return <a href={`item?id=${storyId}`}>{`${count} comments`}</a>;
  }
}
