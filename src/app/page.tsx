import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

// import '@/app/topics/Topics.module.css';
async function getTopics() {
  const response = await fetch(
    'https://hacker-news.firebaseio.com/v0/topstories.json'
  );
  const data = await response.json();
  return data.slice(0, 30);
}

async function getTopic(itemId: number) {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`
  );
  const data = await response.json();
  return data;
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface TopicProps {
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

export default async function TopicPage() {
  const topics = await getTopics();
  return (
    <center>
      <table
        id="hnmain"
        border={0}
        cellPadding={0}
        cellSpacing={0}
        width="85%"
        bgcolor="#f6f6ef"
      >
        <tbody>
          <tr>
            <td
              style={{
                backgroundColor: '#ff6600'
              }}
            >
              <Header></Header>
            </td>
          </tr>
          <tr
            className="pagespace"
            title=""
            style={{
              height: '10px'
            }}
          />
          <tr>
            <td>
              <table border={0} cellPadding={0} cellSpacing={0}>
                <tbody>
                  {topics.map((topicId: number, index: number) => {
                    return (
                      <>
                        {/* @ts-expect-error Server Component */}
                        <Topic
                          key={topicId}
                          topicId={topicId}
                          index={index + 1}
                        />
                      </>
                    );
                  })}
                  <tr className="morespace" style={{ height: '10px' }}></tr>
                  <tr>
                    <td colSpan={2} />
                    <td className="title">
                      <a href="news?p=2" className="morelink" rel="next">
                        More
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <Footer></Footer>
          </tr>
        </tbody>
      </table>
    </center>
  );
}

async function Topic({ topicId, index }: TopicParams) {
  const topic: TopicProps = await getTopic(topicId);
  const domain = getDomainFromUrl(topic.url);
  return (
    <>
      <tr className="athing" key={topicId} id={'' + topicId}>
        <td align="right" valign="top" className="title">
          <span className="rank">{`${index}.`}</span>
        </td>
        <td valign="top" className="votelinks">
          <center>
            <a
              id={`up_${topicId}`}
              href={`vote?id=${topicId}&amp;how=up&amp;goto=news`}
            >
              <div className="votearrow" title="upvote" />
            </a>
          </center>
        </td>
        <td className="title">
          <span className="titleline">
            <a href={`${topic.url}`}>{`${topic.title}`}</a>
            {domain !== '' && (
              <span className="sitebit comhead">
                {' ('}
                <a href={`from?site=${topic.url}`}>
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
            {`${topic.score} ${topic.score === 1 ? 'point' : 'points'}}`}
          </span>{' '}
          by{' '}
          <a href={`user?id=${topic.by}`} className="hnuser">
            {`${topic.by}`}
          </a>{' '}
          <span className="age">
            <a href={`item?id=${topic.id}`}>1 hour ago</a>
          </span>{' '}
          | <a href={`hide?id=${topic.id}&amp;goto=news`}>hide</a> |{' '}
          <a href={`item?id=${topic.id}`}>
            {`${topic.descendants} ${
              topic.descendants === 1 ? 'comment' : 'comments'
            }}`}
          </a>
        </td>
      </tr>
      <tr className="spacer" style={{ height: '5px' }}></tr>
    </>
  );
}

interface TopicParams {
  key: number;
  topicId: number;
  index: number;
}
