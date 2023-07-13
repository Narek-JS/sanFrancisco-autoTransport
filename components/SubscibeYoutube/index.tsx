import { YouTubeIcon } from '@/public/assets/svgs/YouTubeIcon';
import { Polygon } from '@/public/assets/svgs/Polygon';
import { motionCustom } from "@/motion";
import Link from 'next/link';
import classes from './index.module.css';

interface IProps {
    link: string;
    ariaLabel?: string;
    from?: 'right' | 'left' | 'bottom' | 'top';
};

const SubscibeYoutube: React.FC<IProps> = ({
    link,
    ariaLabel,
    from
}) => {
    return (
        <motionCustom.div
            className={classes.contentAboutSubscibe}
            {...(from && { from })}
        >
            <i className={classes.firstPolygon}>
                <Polygon />
            </i>
            <p>
            <Polygon rotate={-90}/>
            <span>
                <span className={classes.red}>
                Don’t
                </span> Forget to 
                <span className={classes.red}>
                Like and
                </span> Subscribe.
            </span>
                <Polygon rotate={-70} />
            </p>
            <div className={classes.wrapperLink}>
            <Link
                href={link}
                {...(ariaLabel && { 'aria-label': ariaLabel })}
                className={classes.linkToYouTube}
            >
                <YouTubeIcon />
                <span>SUBSCRIBE</span>
            </Link>
            </div>
        </motionCustom.div>
    );
};

export { SubscibeYoutube };