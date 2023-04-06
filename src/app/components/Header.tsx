import Logo from '@/app/components/Logo';

export default function Header() {
  return (
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      width="100%"
      style={{
        padding: '2px'
      }}
    >
      <tbody>
        <tr>
          <td
            style={{
              width: '18px',
              paddingRight: '4px'
            }}
          >
            <a href="https://news.ycombinator.com">
              <Logo></Logo>
            </a>
          </td>
          <td
            style={{
              lineHeight: '12pt',
              height: '10px'
            }}
          >
            <span className="pagetop">
              <b className="hnname">
                <a href="news">Hacker News</a>
              </b>
              <a href="newest">new</a> | <a href="front">past</a> |{' '}
              <a href="newcomments">comments</a> | <a href="ask">ask</a> |{' '}
              <a href="show">show</a> | <a href="jobs">jobs</a> |{' '}
              <a href="submit">submit</a>
            </span>
          </td>
          <td
            style={{
              textAlign: 'right',
              paddingRight: '4px'
            }}
          >
            <span className="pagetop">
              <a href="login?goto=news">login</a>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
