import { Container } from '@/sharedComponents/Container';
import { RowForMore } from '@/public/assets/svgs/RowForMore';
import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import testData from './test_data.json';
import classes from './index.module.css';
import useWindowSize from '@/hooks/useWindowSize';

const Footer: React.FC = () => {
    
    const { width } = useWindowSize();

    const addedCount = useMemo(() => {
        let addedCount = 0;
        if(Number(width) < 1160) {
            addedCount++
        };
        return addedCount
    }, [width]);

    return (
        <footer className={classes.footer}>
            <Container>
                <div className={classes.content}>
                    <div className={classes.firstLine}>
                        <div className={classes.columnNode}>
                            <Link href='/'>
                                <Image
                                    src={"/assets/images/logo.png"}
                                    alt="logo"
                                    className={classes.logo}
                                    width={214}
                                    height={88}
                                    priority
                                />
                            </Link>
                            <Link href='/contact-us' className={classNames(classes.link, classes.font20, classes.red)}>
                                <RowForMore />
                                Contact Us
                            </Link>
                            <Link href='tel:( 628 ) 246 - 1557' className={classes.link}>
                                <span>Phone: </span>
                                ( 628 ) 246 - 1557
                            </Link>
                            <Link href='email:info@sanfranciscocartransport.com' className={classes.link}>
                                <span>Email: </span>
                                info@sanfranciscocartransport.com
                            </Link>
                        </div>

                        <div className={classes.columnNode}>
                            <p className={classes.columnTitle}>Quick Links</p>
                            <div
                                className={classes.gridColumn5}
                                style={{ gridTemplateColumns: `repeat(${Math.ceil(testData.links.length / 5)}, 1fr)` }}    
                            >
                                { testData.links.map(({ link, text }, index) => (
                                    <Link
                                        key={index}
                                        href={link}
                                        className={classNames(classes.link, {
                                            [classes.red]: index === testData.links.length - 1
                                        })}
                                        children={text}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={classes.columnNode}>
                        <p className={classes.columnTitle}>Cities</p>
                        <div
                            className={classes.gridColumn5}
                            style={{ gridTemplateColumns: `repeat(${Math.ceil((testData.cities.length) / 5 + addedCount)}, 1fr)` }}    
                        >
                            { testData.cities.map(({ link, text }, index) => (
                                <Link
                                    key={index}
                                    href={link}
                                    className={classes.link}
                                    children={text}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={classes.underContent}>
                    <span>© 2023 - San Francisco Car Transport. All Rights Reserved.</span>
                    <div>
                        <div className={classes.row} />
                        <Link href='terms-and-condition'>Terms And Conditions</Link>
                        <div className={classes.row} />
                        <Link href='terms-and-condition'>Privacy Policy</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export { Footer };