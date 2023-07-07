import { useEffect, useRef, useState } from 'react';
import { BannerSlider } from './BannerSlider';
import { Container } from '@/sharedComponents/Container';
import { FormSteps } from '../FormSteps';
import { useRouter } from 'next/router';
import useWindowSize from '@/hooks/useWindowSize';
import classes from './indx.module.css';

const Banner: React.FC = () => {
    const bannerConentRef = useRef<HTMLDivElement>(null);
    const { pathname } = useRouter();
    const [ bannerContentElm, setBannerContentElm ] = useState<null | HTMLDivElement>(null);
    const size = useWindowSize();

    useEffect(() => {
        if(bannerConentRef.current !== null) {
            setBannerContentElm(bannerConentRef.current);
        };
    }, [size, pathname]);

    return (
        <section>
            { Number(size.width) > 768 && (
                <div className={classes.banner}>
                    <BannerSlider bannerContentElm={bannerContentElm} />
                </div>
            )}
            <div className={classes.bannerConent} ref={bannerConentRef}>
                <Container>
                    <div className={classes.content}>
                        <FormSteps />
                    </div>
                </Container>
            </div>
        </section>
    );
};

export { Banner };