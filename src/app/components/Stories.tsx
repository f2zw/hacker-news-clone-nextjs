import Body from '@/app/components/Body';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

interface StoriesProps {
  page: number;
}
export default function Stories({ page }: StoriesProps) {
  return (
    <center>
      <table
        id="hnmain"
        border={0}
        cellPadding={0}
        cellSpacing={0}
        width="85%"
        bgcolor="#f6f6ef"
      >
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
          <tr>
            <Body page={page} />
          </tr>
          <tr>
            <Footer />
          </tr>
        </tbody>
      </table>
    </center>
  );
}
