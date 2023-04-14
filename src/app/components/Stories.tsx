import Story, { StoryProps } from './Story';

interface StoriesProps {
  page: number;
  stories: StoryProps[];
  pathType: string;
}
export default function Stories({ page, stories, pathType }: StoriesProps) {
  const startIndex = (page - 1) * 30;

  return (
    <table border={0} cellPadding={0} cellSpacing={0}>
      <tbody>
        {stories.map((story: StoryProps, index: number) => {
          const storyIndex = startIndex + index;
          return (
            <>
              <Story key={storyIndex} storyId={story.id} story={story} index={storyIndex + 1} pathType={pathType} />
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
  );
}
