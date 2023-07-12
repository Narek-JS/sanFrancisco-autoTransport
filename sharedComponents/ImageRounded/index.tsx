import { motionCustom } from "@/MotionAnimationElements";
import Image from 'next/image';
import classes from './index.module.css';

interface IProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    from?: 'right' | 'left' | 'bottom' | 'top';
};

const ImageRounded: React.FC<IProps> = ({
    alt,
    src,
    width = 360,
    height = 300,
    from
}) => (
    <motionCustom.div
        from={from}
        className={classes.image}
        style={{ maxWidth: `${width}px`, maxHeight: `${height}px` }}
    >
        <Image
            style={{ maxWidth: `${width}px`, maxHeight: `${height}px` }}
            className={classes.image}
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
    </motionCustom.div>

);

export { ImageRounded };