import styles from '@/app/topics/Topics.header.module.css';
import Logo from './Logo';

export default function Header() {
  return (
    <tr className={styles.main}>
      <td className={styles.td}>
        <table id="headerTable">
          <tbody>
            <tr>
              <td>
                <a href="https://news.ycombinator.com">
                  <Logo></Logo>
                </a>
              </td>
              <td>
                <span className={styles.pagetop}>
                  <b className={styles.hnname}>
                    <a href="news">Hacker News</a>
                  </b>
                  <a href="newest">new</a>| <a href="front">past</a>|{' '}
                  <a href="newcomments">comments</a>| <a href="ask">ask</a>|{' '}
                  <a href="show">show</a>| <a href="jobs">jobs</a>|{' '}
                  <a href="submit">submit</a>
                </span>
              </td>
              <td>
                <span className={styles.pagetop}></span>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}
