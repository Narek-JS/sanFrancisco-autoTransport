import React, { Fragment, useEffect } from 'react';
import { Provider as ReduxProvider } from 'react-redux'
import { Header } from './Header';
import { store } from '@/store';
import { useRouter } from 'next/router';
import { toogleIsBanner } from '@/store/banner';
import { useAppDispatch } from '@/store/hooks';
import { Banner } from './Banner';
import { SideBar } from './SideBar';
import { SocialLinks } from './SocialLinks';
import { Footer } from './Footer';
import Head from 'next/head';

interface IProps {
  pageTitle?: string;
  children: React.ReactNode;
};

const BannerStatus: React.FC<{ isBanner: boolean }> = ({ isBanner }) => {
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(toogleIsBanner(isBanner));
    }, []);

    return null;
};

const Layout: React.FC<IProps> = ({ children, pageTitle = 'San Francisco' }) => {
    const { pathname, query } = useRouter();
    const isBanner =  ['/blogs', '/news', '/404', '/customer-reviews'].includes(pathname) || query.slug; 

    return (
        <Fragment>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <ReduxProvider store={store}>
                <BannerStatus isBanner={Boolean(isBanner)}/>
                <Header />
                {!isBanner && <Banner />}
                <SideBar />
                <SocialLinks />
                <main>
                    {children}
                </main>
                <Footer />
            </ReduxProvider>
        </Fragment>
    );
};

export default Layout;