'use client';
import Image from 'next/image';

import logoImage from '@/app/assets/y18.gif';

interface PageProps {
  href: string;
  text: string;
  disabled: boolean;
}

const pageObject = {
  new: {
    href: 'newest',
    text: 'new',
    disabled: false
  },
  front: {
    href: 'front',
    text: 'past',
    disabled: true
  },
  comments: {
    href: 'newcomments',
    text: 'comments',
    disabled: true
  },
  ask: {
    href: 'ask',
    text: 'ask',
    disabled: false
  },
  show: {
    href: 'show',
    text: 'show',
    disabled: false
  },
  jobs: {
    href: 'jobs',
    text: 'jobs',
    disabled: false
  },
  submit: {
    href: 'submit',
    text: 'submit',
    disabled: true
  },
  login: {
    href: 'login',
    text: 'login',
    disabled: true
  }
};

const headerElement = (selected: boolean, pageProps: PageProps) => {
  if (selected) {
    return (
      <span className="topsel">
        <a
          href={pageProps.href}
          style={{
            pointerEvents: pageProps.disabled ? 'none' : 'auto'
          }}
        >
          {pageProps.text}
        </a>
      </span>
    );
  } else {
    return (
      <a
        href={pageProps.href}
        style={{
          pointerEvents: pageProps.disabled ? 'none' : 'auto'
        }}
      >
        {pageProps.text}
      </a>
    );
  }
};

interface HeaderProps {
  pathType: string;
}

export default function Header({ pathType }: HeaderProps) {
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
              <a
                href="https://news.ycombinator.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
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
                </b>{' '}
                {/* prettier-ignore */}
                {headerElement(pathType === 'newest', pageObject.new)} |{' '}
                {headerElement(pathType === 'front', pageObject.front)} |{' '}
                {headerElement(pathType === 'newcomments', pageObject.comments)} |{' '}
                {headerElement(pathType === 'ask', pageObject.ask)} |{' '}
                {headerElement(pathType === 'show', pageObject.show)} |{' '}
                {headerElement(pathType === 'jobs', pageObject.jobs)} |{' '}
                {headerElement(pathType === 'submit', pageObject.submit)}
              </span>
            </td>
            <td
              style={{
                textAlign: 'right',
                paddingRight: '4px'
              }}
            >
              <span className="pagetop">{headerElement(pathType === 'login', pageObject.login)}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  );
}
