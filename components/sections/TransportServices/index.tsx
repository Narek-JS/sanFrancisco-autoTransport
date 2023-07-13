import { Container } from '@/components/Container';
import { ImageRounded } from '@/components/ImageRounded';
import { RowForMore } from '@/public/assets/svgs/RowForMore';
import { SectionTitleIcon } from '@/public/assets/svgs/SectionTitleIcon';
import { motionCustom } from '@/motion';
import Link from 'next/link';
import classes from './index.module.css';
import classNames from 'classnames';

interface ITransportServiceMock {
    title: string;
    description: string;
    imagePath: string;
    link: { text: string; url: string };
    skew?: boolean
};

interface IProps {
    services: Array<ITransportServiceMock>;
    title?: string;
    backgroundColor?: "gray" | "white";
};

const Service: React.FC<ITransportServiceMock> = ({
    title,
    description,
    imagePath,
    link,
    skew,
}) => {
    return (
        <motionCustom.div
            className={classes.serviceBlock}
            {...(skew && { 
                initial: { transform: "skew(0deg) scale(1)" },
                animate: { transform: "skew(90deg) scale(0)" },
                whileInView: { transform: "skew(0deg) scale(1)" } 
            })}
        >
            <div className={classes.serviceBlockWrapperImage}>
                <div className={classes.serviceBlockBg}/>
                <ImageRounded
                    width={306}
                    height={268}
                    alt='Transport Service Image'
                    src={imagePath}
                />
            </div>
            <div className={classes.serviceBlockContent}>
                <p className={classes.serviceBlockTitle}>{title}</p>
                <p className={classes.serviceBlockDescription}>{description}</p>
                <Link href={link.url} className={classes.serviceBlockLink}>
                    {link.text}
                    <RowForMore />
                </Link>
            </div>
        </motionCustom.div>
    );
};

const TransportServices: React.FC<IProps> = ({
    services,
    title,
    backgroundColor = 'gray',
}) => {
    return (
        <section className={classNames(classes.servicesSection, {
            [classes[backgroundColor]]: backgroundColor,
        })}>
            <Container>
                <h2 className={classes.title}>
                    <SectionTitleIcon />
                    {title}
                </h2>
                <div className={classes.servicesContent}>
                    { services.map((service, index) => (
                        <Service
                            key={index}
                            skew={true}
                            {...service}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export { TransportServices, Service as TransportService };