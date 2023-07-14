import { NextPage } from 'next';
import { metaTags } from '@/constants/metaTags';
import Link from 'next/link';
import Head from 'next/head';
import classes from './index.module.css';
import useWindowSize from '@/hooks/useWindowSize';

const NotFound: NextPage = () => {
  const { width } = useWindowSize();

  const getMarginValues = (): { marginTop: number; marginBottom: number } => {
    const marginTopMax = 300;
    const marginTopMin = 1700;

    const marginBottomMax = 200;
    const marginBottomMin = 100;

    const minWidth = 320;
    const maxWidth = 100000;

    const marginTop = marginTopMax - ((Number(width) - minWidth) / (maxWidth - minWidth)) * (marginTopMax - marginTopMin);
    const marginBottom = marginBottomMax - ((Number(width) - minWidth) / (maxWidth - minWidth)) * (marginBottomMax - marginBottomMin);

    return { marginTop, marginBottom };
  };

  const { marginTop, marginBottom } = getMarginValues();

  console.log({marginTop, marginBottom});

  return (
    <>
      <Head>{metaTags.notFound}</Head>
      <div
        className={classes.container}
        style={{
          marginTop: `${marginTop}px`,
          marginBottom: `${marginBottom}px`
        }}
      >
        <h1 className={classes.title}>404 - Page Not Found</h1>
        <p className={classes.message}>The page you&apos;re looking for could not be found.</p>
        <p className={classes.back}>
          Go back to 
          <Link href="/">
            <span className={classes.link}> the homepage</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;