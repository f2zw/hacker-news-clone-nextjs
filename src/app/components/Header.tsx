'use client';
import Image from 'next/image';

import logoImage from '@/app/assets/y18.gif';
export default function Header() {
  return (
    <td
      style={{
        backgroundColor: '#ff6600'
      }}
    >
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
                <Image
                  src={logoImage}
                  alt="y18"
                  width="18"
                  height="18"
                  style={{
                    border: '1px white solid',
                    borderCollapse: 'collapse'
                  }}
                />
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
                <a href="/">new</a> | <a href="front">past</a> |{' '}
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
    </td>
  );
}
