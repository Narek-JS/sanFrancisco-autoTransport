import { Container } from '@/components/Container';
import { StarIcon } from '@/public/assets/svgs/StarIcon';
import { useRouter } from 'next/router';
import { RowForMore } from '@/public/assets/svgs/RowForMore';
import { motionCustom } from "@/motion";
import { presentation } from '@/constants/review';
import Link from 'next/link';
import classNames from 'classnames';
import classes from './index.module.css';

const reviewPrecent = 4.8; 

const ReviewSection = () => {
    const { pathname } = useRouter();

    return (
        <section className={classNames(classes.reviewSection, {
            [classes.mb30]: pathname === '/'
        })}>
            <Container>
                <div className={classes.reviewContent}>
                    <motionCustom.div
                        from='left'
                        className={classes.descriptionWrapper}
                    >
                        <h3 className={classes.titleOfDescription}><span>San Jose</span> Car Transport Review</h3>
                        <p className={classes.description}>Lorem ipsum dolor sit amet consectetur. Cursus tortor amet porta condimentum auctor curabitur et. Ipsum hac vitae urna egestas vitae eget.  Cursus tortor amet porta condimentum auctor curabitur et. Ipsum hac vitae urna egestas vitae eget.Cursus tortor amet porta condimentum auctor curabitur et</p>
                    </motionCustom.div>
                    <div className={classes.reviewContentSecondeBlock}>
                        <motionCustom.div
                            className={classes.estimate}
                            animate={{ transform: "translate(0, -100px)", opacity: 0 }}
                            whileInView={{ transform: "translate(0, 0px)", opacity: 1 }}
                        >
                            <p className={classes.estimateDiscuss}>{reviewPrecent} / 5</p>
                            <p className={classes.wrapperStars}>
                                { new Array(5).fill('').map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        {...((5 - Math.floor(5 / reviewPrecent)) === i && { precent: (5 - reviewPrecent) * 100})}
                                    />
                                ))}
                            </p>
                            <p className={classes.reviewQuantity}>199 Review</p>
                        </motionCustom.div>
                        <motionCustom.div
                            className={classes.presentation}
                            animate={{ transform: "translate(0, -100px)", opacity: 0 }}
                            whileInView={{ transform: "translate(0, 0px)", opacity: 1 }}
                        >
                            { presentation.sort((a, b) => b.id - a.id).map(({ id, percent }) => (
                                <div className={classes.percentList} key={id}>
                                    <span className={classes.percentId}>{id}</span>
                                    <StarIcon />
                                    <div className={classes.percentWrapper}>
                                        <span
                                            className={classes.percentActive}
                                            style={{width: `${percent * 100 / 200}%`}}
                                        />
                                    </div>
                                    <span className={classes.row}>|</span>
                                    <span className={classes.percent}>{percent}</span>
                                </div>
                            ))}
                        </motionCustom.div>
                        <motionCustom.div
                            animate={{ transform: "translateX(100px)", opacity: 0 }}
                            whileInView={{transform: "translateX(0px)", opacity: 1 }}
                            className={classes.buttons}
                        >
                            <Link
                                href='/reviews'
                                className={classes.redMoreBtn}
                            >
                                <span>Read More</span>
                            </Link>
                            <Link
                                href='/reviews'
                                className={classes.feedbackBtn}
                            >
                                <RowForMore color='#FFFFFF' />
                                Give us your feedback
                            </Link>
                        </motionCustom.div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export { ReviewSection };