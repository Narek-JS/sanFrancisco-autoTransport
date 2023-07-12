import YouTube from 'react-youtube';
import { motionCustom } from "@/MotionAnimationElements";
import classes from './index.module.css';

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
        <motionCustom.div
            className={classes['rounded-video']}
            {...(from && { from })}
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
        </motionCustom.div>
    );
};