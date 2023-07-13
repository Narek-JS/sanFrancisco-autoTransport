import { useEffect, useState } from 'react';
import { Container } from '@/components/Container';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectMenus } from '@/store/manu';
import { EarringIcon } from '@/public/assets/svgs/EarringIcon';
import { MailIcon } from '@/public/assets/svgs/MailIcon';
import { closeQuoteFormMobile, openQuoteFormMobile, selectQuoteFormMobileStatus } from '@/store/quoteForm';
import { closeSidebar, selectSiteBarStatus } from '@/store/siteBar';
import { useScrollPositionWindow } from '@/hooks/useScrollPositionWindow';
import { useRouter } from 'next/router';
import { ArrowIcon } from '@/public/assets/svgs/ArrowIcon';
import { EarringIconMobile } from '@/public/assets/svgs/EarringIconMobile';
import useWindowSize from '@/hooks/useWindowSize';
import Link from 'next/link';
import classNames from 'classnames';
import classes from './index.module.css';

const Nav: React.FC<{ isBanner: boolean }> = ({ isBanner }) => {
    const { pathname } = useRouter();
    const { width } = useWindowSize();
    const { data } = useAppSelector(selectMenus);
    const [ isContentDesktopFixed, setIsContentDesktopFixed ] = useState(false);
    const isOpenQuoteFormMobile = useAppSelector(selectQuoteFormMobileStatus);
    const scrollPosition = useScrollPositionWindow();
    const isOpenSideBar = useAppSelector(selectSiteBarStatus);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (scrollPosition >= 50 && !isContentDesktopFixed) {
            setIsContentDesktopFixed(true);
        } else if (scrollPosition < 50 && isContentDesktopFixed) {
            setIsContentDesktopFixed(false);
        };
    }, [scrollPosition]);

    useEffect(() => {
        if(Number(width) > 768) {
            isOpenQuoteFormMobile && dispatch(closeQuoteFormMobile());
            isOpenSideBar && dispatch(closeSidebar());
        };
    }, [width]);

    const toogleQoutForm = () => {
        dispatch(isOpenQuoteFormMobile ? closeQuoteFormMobile() : openQuoteFormMobile());
    };

    return (
        <nav className={classNames(classes.nav, {
            [classes.informationBarBg]: isContentDesktopFixed || isBanner,
            [classes.informationBarBgBlue]: isOpenSideBar
        })}>
            <Container>
                <div className={classNames(classes.contentDesktop)}>
                    { data?.topHeaderLeftItem?.url &&
                        <Link href={`tel:${data?.topHeaderLeftItem?.url}`} className={classes.dynamicLink}>
                            { data?.topHeaderLeftItem?.title === 'phone' ? <EarringIcon /> : <MailIcon /> }
                            { data?.topHeaderLeftItem?.url }
                        </Link>
                    }
                    <ul className={classes.ul}>
                        { data?.topHeaderCenterItems.map(item => (
                            <li
                                key={item.id}
                                className={classNames(classes.li, {
                                    [classes.activeLink]: pathname === '/' + item.url
                                })}
                            >
                                <Link href={item.url || ''}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    { data?.topHeaderRightItem?.url &&
                        <Link href={`tel:${data?.topHeaderRightItem?.url}`} className={classes.dynamicLink}>
                            { data?.topHeaderLeftItem?.title === 'Mail' ?  <EarringIcon /> : <MailIcon /> }
                            { data?.topHeaderRightItem?.url }
                        </Link>
                    }
                </div>
                
                <div className={classes.contentMobile}>
                    <Link href={`tel:${data?.topHeaderLeftItem?.title === 'Mail' ? data?.topHeaderRightItem?.url : data?.topHeaderLeftItem?.url}`}>
                        <EarringIconMobile />
                        call Now
                    </Link>
                    <div onClick={toogleQoutForm} className={classes.getQuote}>
                        <ArrowIcon rotate={isOpenQuoteFormMobile ? 0 : 180}/>
                        Get Quote Open
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export { Nav };