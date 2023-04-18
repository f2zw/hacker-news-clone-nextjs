interface BodyNoticeProps {
  pathType: string;
}

export default function BodyNotice({ pathType }: BodyNoticeProps) {
  if (pathType === 'show') {
    return (
      <div
        style={{
          marginLeft: '36px',
          marginTop: '6px',
          marginBottom: '12px'
        }}
      >
        {'Please read the '}
        <a href="https://news.ycombinator.com/showhn.html">
          <u>rules</u>
        </a>
        {'. You can also browse the '}
        <a href="https://news.ycombinator.com/shownew">
          <u>newest</u>
        </a>
        {' Show HNs.'}
      </div>
    );
  } else if (pathType === 'jobs') {
    return (
      <div
        style={{
          marginLeft: '14px',
          marginTop: '6px',
          marginBottom: '14px'
        }}
      >
        {'These are jobs at YC startups. See more at '}
        <a href="https://news.ycombinator.com/jobs">
          <u>ycombinator.com/jobs</u>
        </a>
        {'.'}
      </div>
    );
  } else {
    return <></>;
  }
}
