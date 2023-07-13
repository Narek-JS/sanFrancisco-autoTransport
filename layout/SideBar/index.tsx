import { Container } from '@/components/Container';
import { Search } from '@/components/Search';
import { selectMenus } from '@/store/manu';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { closeSidebar, selectSiteBarStatus } from '@/store/siteBar';
import { ArrowButtonMobilMenu } from '@/public/assets/svgs/ArrowButtonMobilMenu';
import { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import classes from './index.module.css';

const SideBar: React.FC = () => {
    const [ openChildGroupIndex, setOpenChildGroupIndex ] = useState<null | number>(null);
    const { data } = useAppSelector(selectMenus);
    const isOpen = useAppSelector(selectSiteBarStatus);
    const dispatch = useAppDispatch();

    const toogleLinkGroup = (index: number) => {
        if(openChildGroupIndex === index) return setOpenChildGroupIndex(null);
        setOpenChildGroupIndex(index);
    };

    const handleCloseSidebar = () => dispatch(closeSidebar());

    if(!isOpen) return null;

    return (
        <div className={classNames(classes.sideBar, 'sideBar')}>
            <Container>
                <div className={classes.siodeBarContent}>
                    <Search />
                    <div className={classes.linksGroup}>
                        { data?.allItems.map((item, index) => item?.children?.length ? ( 
                            <Link
                                href={item?.url || ''}
                                key={item.id}
                                className={classes.wrapperLink}
                                onClick={handleCloseSidebar}
                            >
                                <span className={classes.link}>{item?.title}</span>
                            </Link>
                        ) : (
                            <div key={item.id} className={classes.wrapperLink}>
                                <p className={classes.linkTitle} onClick={() => toogleLinkGroup(index)}>
                                    {item.title} <ArrowButtonMobilMenu rotate={index === openChildGroupIndex ? 180 : 0}/>
                                </p>
                                <div className={classNames(classes.childLinks, {
                                    [classes.childLinkActive]: index === openChildGroupIndex
                                })}>
                                    { item.children!.map((childItem, index) => (
                                        <div className={classes.link} key={index}>
                                            <Link
                                                href={childItem?.url || ''}
                                                onClick={handleCloseSidebar}
                                            >
                                                {childItem?.title}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};


export { SideBar };