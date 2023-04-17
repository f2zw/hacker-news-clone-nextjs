import sImage from '@/app/assets/s.gif';
import Image from 'next/image';

export default function Header() {
  return (
    <td>
      <Image src={sImage} alt="s" width={0} height={10} />
      <table cellPadding={1} cellSpacing={0} width="100%">
        <tbody>
          <tr>
            <td style={{ backgroundColor: '#ff6600' }} />
          </tr>
        </tbody>
      </table>
      <br />
      <center>
        <a href="https://news.ycombinator.com/apply/">Applications are open for YC Summer 2023</a>
      </center>
      <br />
      <center>
        <span className="yclinks">
          <a href="https://news.ycombinator.com/newsguidelines.html">Guidelines</a>
          {' | '}
          <a href="https://news.ycombinator.com/newsfaq.html">FAQ</a>
          {' | '}
          <a href="https://news.ycombinator.com/lists">Lists</a>
          {' | '}
          <a href="https://github.com/cheeaun/node-hnapi">API</a>
          {' | '}
          <a href="https://news.ycombinator.com/security.html">Security</a>
          {' | '}
          <a href="https://www.ycombinator.com/legal/">Legal</a>
          {' | '}
          <a href="https://www.ycombinator.com/apply/">Apply to YC</a>
          {' | '}
          <a href="mailto:hn@ycombinator.com">Contact</a>
        </span>
        <br />
        <br />
        <form method="get" action="//hn.algolia.com/">
          {'Search: '}
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
