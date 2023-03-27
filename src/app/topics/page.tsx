import styles from '@/app/topics/Topics.module.css';
import Arrow from './Arrow';
import Header from './Header';

async function getTopics() {
  const response = await fetch(
    'https://dummy.restapiexample.com/api/v1/employees'
  );
  const data = await response.json();
  return data.data;
}

interface TopicProps {
  id: number;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
  profile_image: string;
}

export default async function TopicPage() {
  const topics = await getTopics();
  return (
    <center className={styles.main}>
      <table className={styles.table} id="hnname">
        <tbody className={styles.body}>
          <Header></Header>
          <tr className={styles.tr_pagespace} id="pagespace" title=""></tr>
          <tr>
            <td>
              <table>
                <tbody>
                  {topics.map((topic: TopicProps) => {
                    return <Topic key={topic.id} topic={topic} />;
                  })}
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </center>
  );
}

function Topic({ key, topic }: TopicParams) {
  return (
    // <div>
    <tr id="athing" className={styles.athing} key={key}>
      <td className={styles.td_title} align="right" valign="top">
        <span className="rank">{topic.id}.</span>
      </td>
      <td className={styles.votelinks} valign="top">
        {<Arrow></Arrow>}
      </td>
      <td className={styles.td_title}>
        {topic.employee_name} | {topic.employee_salary} | {topic.employee_age} |{' '}
        {topic.profile_image}
      </td>
    </tr>
    //   <tr className={styles.tr_spacer} />
    // </div>
  );
}

interface TopicParams {
  key: number;
  topic: TopicProps;
}
