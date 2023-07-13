import { Container } from '@/components/Container';
import { useGetMenusQuery } from '@/store/manu';
import { LoadingUI } from '@/components/LoadingUI';
import { Nav } from './Nav';
import { Redirect } from '@/components/Redirect';
import { Search } from '@/components/Search';
import { useScrollPositionWindow } from '@/hooks/useScrollPositionWindow';
import { useEffect, useState } from 'react';
import { Burger } from '@/components/Burger';
import { useAppSelector } from '@/store/hooks';
import { selectQuoteFormMobileStatus } from '@/store/quoteForm';
import { FormSteps } from '../FormSteps';
import { useRouter } from 'next/router';
import { Logo } from '@/components/Logo';
import Dropdown from '@/components/Dropdown';
import classes from './index.module.css';
import Link from 'next/link';
import classNames from 'classnames';

const Header: React.FC<{ isBanner: boolean }> = ({ isBanner }) => {
    const { pathname, query } = useRouter();
    const { isLoading, data, error } = useGetMenusQuery('menus');
    const [ isContentDesktopFixed, setIsContentDesktopFixed ] = useState(false);
    const scrollPosition = useScrollPositionWindow();
    const isOpen = useAppSelector(selectQuoteFormMobileStatus);

    useEffect(() => {
        if (scrollPosition >= 50 && !isContentDesktopFixed) {
            setIsContentDesktopFixed(true);
        } else if (scrollPosition < 50 && isContentDesktopFixed) {
            setIsContentDesktopFixed(false);
        };
    }, [scrollPosition]);

    if(error !== undefined) return <Redirect to='/404'/>
    if(isLoading) return <LoadingUI type='fullPage' />;

    return (
        <header className={classes.header}>
            <Nav isBanner={isBanner}/>
            <div
                className={classNames(classes.informationBar, {
                    [classes.informationBarBg]: isContentDesktopFixed || isBanner
                })}
            >
                <Container>
                    <div className={classes.contentDesktop}>
                        <Logo />
                        <ul className={classes.ul}>
                            { data?.items.map((item) => (
                                !item.children?.length ? (
                                    <Link
                                        className={classNames(classes.link, {
                                            [classes.activeLink]: pathname === '/' + item.url
                                        })}
                                        key={item.id}
                                        href={item?.url || ''}
                                    >
                                        {item.title}
                                    </Link>
                                ) : (
                                    <Dropdown
                                        key={item.id}
                                        label={item.title || ''}
                                        items={item.children!.map(({ url, title }) => ({
                                            link: url!,
                                            label: title!
                                        }))}
                                        {...((isContentDesktopFixed || isBanner) && {colorWhite: true})}
                                    />
                                )
                            ))}
                        </ul>
                        <Search />
                    </div>
                    <div className={classes.contentMobile}>
                        <Logo />
                        <Burger />       
                    </div>
                </Container>
            </div>
            { isOpen && (
                <div className={classNames(classes.fullScreen, 'fullScreen')}>
                    <Container>
                        <FormSteps />
                    </Container>
                </div>
            )}
        </header>
    );
};

export { Header };