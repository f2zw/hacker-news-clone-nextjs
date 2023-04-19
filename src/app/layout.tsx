import type { Metadata } from 'next';

import '@/app/globals.css';

import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <center>
          <table id="hnmain" border={0} cellPadding={0} cellSpacing={0} width="85%" bgcolor="#f6f6ef">
            <tbody>
              <tr>
                <Header />
              </tr>
              <tr
                className="pagespace"
                title=""
                style={{
                  height: '10px'
                }}
              />
              <tr>{children}</tr>
              <tr>
                <Footer />
              </tr>
            </tbody>
          </table>
        </center>
      </body>
    </html>
  );
}
