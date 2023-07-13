import { ContentNodeIcon } from '@/public/assets/svgs/ContentNodeIcon';
import { motionCustom } from "@/motion";
import classes from './index.module.css';

interface IProps {
    children: React.ReactNode;
    from?: 'right' | 'left' | 'bottom' | 'top';
    maxWidth?: number;
};

const WrapperContentNode: React.FC<IProps> = ({
    children,
    maxWidth,
    from,
}) => {
    return (
        <motionCustom.div
            className={classes.contentNode}
            exit="hide"
            {...(maxWidth !== undefined && { style: { maxWidth: maxWidth + 'px' } })}
            {...(from && { from })}
        >
            <i> <ContentNodeIcon /> </i>
            <div
                className={classes.content}
                children={children}
            />
        </motionCustom.div>
    );
};

export { WrapperContentNode };