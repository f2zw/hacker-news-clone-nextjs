import Image from 'next/image';

function Logo() {
  return (
    <Image
      src="/y18.gif"
      alt="y18"
      width="18"
      height="18"
      style={{
        border: '1px solid white'
      }}
    />
  );
}

export default Logo;
