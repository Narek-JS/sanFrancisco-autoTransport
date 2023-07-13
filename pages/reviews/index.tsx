import { metaTags } from "@/constants/metaTags";
import { NextPage } from "next";
import { Fragment, useState } from "react";
import { Container } from "@/components/Container";
import { feedbacksTest, presentation } from "@/constants/review";
import { StarIcon } from "@/public/assets/svgs/StarIcon";
import { SmallStarIconReview } from "@/public/assets/svgs/SmallStarIconReview";
import { LikeGreen } from "@/public/assets/svgs/LikeGreen";
import { Conditional } from "@/components/Conditional";
import { FeedbackForm } from "@/shared/FeedbackForm";
import useWindowSize from "@/hooks/useWindowSize";
import Head from "next/head";
import classes from './index.module.css';

const Reviews: NextPage = () => {
    const { width } = useWindowSize();
    const [ isOpenForm, setIsOpenForm ] = useState(false);
    const reviewPrecent = 4.8;

    const toogleIsOpenForm = () => setIsOpenForm(prev => !prev);

    return (
        <Fragment>
            <Head>{metaTags.reviews}</Head>
            <section className={classes.reviewSection}>
                <Container>
                    <div className={classes.content}>
                        <div className={classes.reviewsGraph}>
                            <h2 className={classes.subTitle}>Our Customers Reviews</h2>
                            <div className={classes.reviewContent}>
                                <div className={classes.reviewContentSecondeBlock}>
                                    <div className={classes.estimate} >
                                        <p className={classes.estimateDiscuss}>{reviewPrecent} / 5</p>
                                        <p className={classes.wrapperStars}>
                                            { new Array(5).fill('').map((_, i) => (
                                                <StarIcon color="yellow" key={i} />
                                            ))}
                                        </p>
                                        <p className={classes.reviewQuantity}>199 Review</p>
                                    </div>
                                    <div className={classes.presentation}>
                                        { presentation.sort((a, b) => b.id - a.id).map(({ id, percent }) => (
                                            <div className={classes.percentList} key={id}>
                                                <span className={classes.percentId}>{id}</span>
                                                <StarIcon color="yellow"/>
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
                                    </div>
                                    { Number(width) > 991 && 
                                        <div className={classes.buttons}>
                                            <button className={classes.feedbackBtn} onClick={toogleIsOpenForm}>Give us your feedback</button>
                                        </div>
                                    }
                                </div>
                                { Number(width) < 991 && 
                                    <div className={classes.buttons}>
                                        <button className={classes.feedbackBtn} onClick={toogleIsOpenForm}>Give us your feedback</button>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className={classes.feedbackNode}>
                            <div className={classes.wrapperfeedbackConetent}>
                                { feedbacksTest.map((feedback, index) => (
                                    <div className={classes.feedback} key={index}>
                                        <div className={classes.logo}>
                                            {feedback.name[0].toUpperCase()}
                                        </div>
                                        <div className={classes.contentdata}>
                                            <p className={classes.name}>{feedback.name}</p>
                                            <p className={classes.data}>{feedback.data}</p>
                                            <p className={classes.time}>
                                                {[...Array(5)].map((_, index) => <SmallStarIconReview key={index} /> )}
                                                {feedback.time}
                                            </p>
                                            <p className={classes.description}>{feedback.feedback}</p>
                                        </div>
                                        { feedback.recommendation && (
                                            <div className={classes.recommendation}>
                                                Recommendation:
                                                <LikeGreen />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
                <Conditional condition={isOpenForm}>
                    <FeedbackForm setIsOpenForm={setIsOpenForm}/>
                </Conditional>
            </section>
        </Fragment>
    );
};


export default Reviews;