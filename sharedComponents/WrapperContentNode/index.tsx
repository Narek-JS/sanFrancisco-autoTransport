import { ContentNodeIcon } from '@/public/assets/svgs/ContentNodeIcon';
import { motion } from 'framer-motion';
import { motionOption } from '@/constants/animationOptions';
import classes from './index.module.css';

interface IProps {
    children: React.ReactNode;
    from?: 'right' | 'left' | 'bottom' | 'top';
};

const WrapperContentNode: React.FC<IProps> = ({ children, from }) => {

    return (
        <motion.div
            className={classes.contentNode}
            exit="hide"
            {...(from && motionOption[from])}
        >
            <i>
                <ContentNodeIcon />
            </i>
            <div className={classes.content}>
                {children}
            </div>
        </motion.div>
    );
};

export { WrapperContentNode };