import Image from 'next/image';
import { motion } from 'framer-motion';
import classes from './index.module.css';
import { motionOption } from '@/constants/animationOptions';

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
    <motion.div
        {...(from && motionOption[from])}
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
    </motion.div>

);

export { ImageRounded };