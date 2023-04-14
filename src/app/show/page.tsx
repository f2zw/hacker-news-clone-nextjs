'use client';

import { usePathname, useSearchParams } from 'next/navigation';

import Body from '@/app/components/Body';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

export default function Show() {
  const searchParams = useSearchParams();

  const pathname = usePathname();
  const pathType = pathname.slice(1) !== '' ? pathname.slice(1) : 'news';
  const page = searchParams.get('p') || '1';

  return (
    <center>
      <table id="hnmain" border={0} cellPadding={0} cellSpacing={0} width="85%" bgcolor="#f6f6ef">
        <tbody>
          <tr>
            <Header pathType={pathType} />
          </tr>
          <tr
            className="pagespace"
            title=""
            style={{
              height: '10px'
            }}
          />
          <tr>
            <Body page={parseInt(page)} pathType={pathType} />
          </tr>
          <tr>
            <Footer />
          </tr>
        </tbody>
      </table>
    </center>
  );
}
