import type { AppProps } from 'next/app';
import { Ubuntu } from 'next/font/google';
import Layout from '@/layout';
import Head from 'next/head';
import '@/styles/globals.css';

const ubuntuFont = Ubuntu({
  weight: '400',
  subsets: ['latin'],
  style: 'normal'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          name="view-transition"
          content="same-origin"
        />
      </Head>
      <div className={ubuntuFont.className}>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
};
