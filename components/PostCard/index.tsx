import { CalendarIcon } from '@/public/assets/svgs/CalendarIcon';
import { formatDate } from '@/helper/time';
import { RowForMore } from '@/public/assets/svgs/RowForMore';
import { motionCustom } from "@/motion";
import { Conditional } from '../Conditional';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import classes from './index.module.css';

type CardType = 'square' | 'shadow';
type CategoryType = 'blogs' | 'news';
type AnimationType = 'right' | 'left' | 'bottom' | 'top' | 'skew';

interface IProps {
    type?: CardType;
    category: CategoryType;
    imagePath: string;
    date: string;
    title: string;
    description: string;
    link: { text?: string; url: string };
    from?: AnimationType;
    classN?: string;
};

const PostCard: React.FC<IProps> = ({
    type = 'shadow',
    category,
    imagePath,
    date,
    description,
    link,
    title,
    from,
    classN = ''
}) => {
    return (
        <motionCustom.div
            className={classNames(classes.card, classN, {
                [classes.shadowCard]: type === 'shadow',
                [classes.squareCard]: type === 'square'
            })}
            {...(from && { from })}
        >
            <Image
                alt='Article Image'
                src={imagePath}
                width={278}
                height={185}
                className={classes.image}
            />
            <div className={classes.cardContent}>
                <div className={classes.date}>
                    <CalendarIcon />
                    <span>{formatDate(date)}</span>
                    <Conditional condition={type !== 'shadow'}>
                        <div className={classes.row} />
                    </Conditional>
                    <Link href={'/' + category} className={classes.link}>
                        {category[0].toUpperCase() + category.slice(1, category.length)}
                    </Link>
                </div>
                <p className={classes.title}>{title}</p>
                <p className={classes.description}>{description}</p>
                <div className={classes.wrapperLink}>
                    <Link
                        className={classes.link}
                        href={link.url}
                    >
                        <RowForMore color='#E53E29'/>
                        {link.text || 'View All'}
                    </Link>
                    <Conditional condition={type !== 'shadow'}>
                        <Link
                            className={classes.viewAll}
                            href={link.url}
                        >
                            View All
                        </Link>
                    </Conditional>
                </div>
            </div>
        </motionCustom.div>
    );
};

export { PostCard };