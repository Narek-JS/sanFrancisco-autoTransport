import { useAppSelector } from '@/store/hooks';
import { BannreIndexType, selectBannerIndex } from '@/store/banner';
import { RowForMore } from '@/public/assets/svgs/RowForMore';
import classes from './index.module.css';
import Link from 'next/link';

interface IContentNode {
    serviceName: string;
    text: string;
    link: string;
};

const bannerContent: Record<BannreIndexType, IContentNode> = {
    '0': {
        serviceName: 'Open Car Transport and Full Insurance Benefits',
        text: 'Open Car Transport is one of the most popular and cheapest methods to ship your vehicle. Ship your vehicle using open car transport.',
        link: '/'
    },
    '1': {
        serviceName: 'Enclosed Auto Transport and Full Insurance Benefits',
        text: 'Enclosed Car Transport gives extra car protection. If you want to ship a luxurious vehicle, enclosed car transport is the...',
        link: '/'
    },
    '2': {
        serviceName: 'Expedited Shipping and Full Insurance Benefits',
        text: "Expedited Car Transport is the fastest way to ship your vehicle. If you have strict deadlines to get your vehicle to a destination, it's...",
        link: '/'
    },
    '3': {
        serviceName: 'Door-to-Door Delivery and Full Insurance Benefits',
        text: "We will pick up your vehicle from anywhere near your door and drop off as close as possible to the location of your choice.",
        link: '/'
    }
};

const BannerContent: React.FC = () => {
    const bannerIndex = useAppSelector(selectBannerIndex);

    return (
        <div className={classes.textes}>
            <div className={classes.explore}>
                <p>
                    Your Flexible <span>San Jose Car</span> Transport
                </p>
                <p className={classes.fz24}>
                    { bannerContent[bannerIndex].text }
                </p>
            </div>
            <Link
                className={classes.link}
                href={ bannerContent[bannerIndex].link }
            >
                <RowForMore />
                Continue Reading
            </Link>
            <div className={classes.seccondLinkTitle}>
                <p>{bannerContent[bannerIndex].serviceName}</p>
            </div>
        </div>
    );
};

export { BannerContent };