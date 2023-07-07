import YouTube from 'react-youtube';
import { motion } from 'framer-motion';

import classes from './index.module.css';
import { motionOption } from '@/constants/animationOptions';

interface IProps {
    id: string;
    height?: number;
    from?: 'right' | 'left' | 'bottom' | 'top';
};

export const Video: React.FC<IProps> = ({
    id,
    height = 300,
    from
}) => {
 
    return (
        <motion.div
            className={classes['rounded-video']}
            {...(from && motionOption[from])}
        >
            <YouTube
                videoId={id}
                opts={{
                    height: `${height}px`,
                    width: '100%',
                    playerVars: {
                        autoplay: 1,
                    },
                }}
                className='player'
            />
        </motion.div>
    );
};