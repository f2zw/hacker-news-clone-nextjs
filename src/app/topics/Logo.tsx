import styles from '@/app/topics/Topics.header.module.css';
import Image from 'next/image';

function Logo() {
  return (
    <Image
      src="/y18.gif"
      alt="y18"
      width="18"
      height="18"
      className={styles.logo}
    />
  );
}

export default Logo;
