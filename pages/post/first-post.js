import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
export default function FirstPost() {
  console.log('first post');
  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>
          Hello,I'm panminxiang.I'm a software engineer.You can contact me on
          Twitter
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://www.nextjs.cn/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
