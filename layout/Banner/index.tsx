import { BannerSlider } from './BannerSlider';
import { Container } from '@/sharedComponents/Container';
import { FormSteps } from '../FormSteps';
import { useRenderRout } from '@/hooks/useRenderRout';
import useWindowSize from '@/hooks/useWindowSize';
import classNames from 'classnames';
import classes from './indx.module.css';

const Banner: React.FC = () => {
    const size = useWindowSize();
    useRenderRout();

    return (
        <section>
            { Number(size.width) > 768 && (
                <div className={classes.banner}>
                    <BannerSlider />
                </div>
            )}
            <div className={classNames(classes.bannerConent, 'bannerContentElm')}>
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