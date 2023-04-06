import SImage from './SImage';

export default function Header() {
  return (
    <td>
      <SImage></SImage>
      <table border={0} cellPadding={1} cellSpacing={0} width="100%">
        <tbody>
          <tr>
            <td style={{ backgroundColor: '#ff6600' }} />
          </tr>
        </tbody>
      </table>
      <br />
      <center>
        <a href="https://news.ycombinator.com">
          Applications are open for YC Summer 2023
        </a>
      </center>
      <br />
      <center>
        <span className="yclinks">
          <a href="newsguidelines.html">Guidelines</a> |{' '}
          <a href="newsfaq.html">FAQ</a> | <a href="lists">Lists</a> |{' '}
          <a href="https://github.com/HackerNews/API">API</a> |{' '}
          <a href="security.html">Security</a> |{' '}
          <a href="https://www.ycombinator.com/legal/">Legal</a> |{' '}
          <a href="https://www.ycombinator.com/apply/">Apply to YC</a> |{' '}
          <a href="mailto:hn@ycombinator.com">Contact</a>
        </span>
        <br />
        <br />
        <form method="get" action="//hn.algolia.com/">
          Search:
          <input
            type="text"
            name="q"
            size={17}
            autoCorrect={'off'}
            spellCheck={'false'}
            autoCapitalize={'off'}
            autoComplete={'false'}
          />
        </form>
      </center>
    </td>
  );
}
