import { metaTags } from "@/constants/metaTags";
import { NextPage } from "next";
import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { motionOption } from "@/constants/animationOptions";
import { SectionTitleIcon } from "@/public/assets/svgs/SectionTitleIcon";
import { Container } from "@/components/Container";
import { ArrowOpenIcon } from "@/public/assets/svgs/ArrowOpenIcon";
import { Conditional } from "@/components/Conditional";
import { useScrollToView } from "@/hooks/useScrollToView";
import Head from "next/head";
import classes from './index.module.css';
import classNames from "classnames";

interface IQuestionData {
    question: string;
    answer: string;
    isActive?: boolean;
};

const testData = [
    {
        question: 'Lorem ipsum dolor sit amet consectetur ?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, placeat? Voluptas nihil labore est ad minus, asperiores eius iste quaerat assumenda enim voluptate reprehenderit voluptates perspiciatis optio velit rerum fugit.'   
    },
    {
        question: 'Lorem ipsum dolor sit amet consectetur ?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, placeat? Voluptas nihil labore est ad minus, asperiores eius iste quaerat assumenda enim voluptate reprehenderit voluptates perspiciatis optio velit rerum fugit.'   
    },
    {
        question: 'Lorem ipsum dolor sit amet consectetur ?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, placeat? Voluptas nihil labore est ad minus, asperiores eius iste quaerat assumenda enim voluptate reprehenderit voluptates perspiciatis optio velit rerum fugit.'   
    },
    {
        question: 'Lorem ipsum dolor sit amet consectetur ?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, placeat? Voluptas nihil labore est ad minus, asperiores eius iste quaerat assumenda enim voluptate reprehenderit voluptates perspiciatis optio velit rerum fugit.'   
    },
    {
        question: 'Lorem ipsum dolor sit amet consectetur ?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, placeat? Voluptas nihil labore est ad minus, asperiores eius iste quaerat assumenda enim voluptate reprehenderit voluptates perspiciatis optio velit rerum fugit.'   
    },
    {
        question: 'Lorem ipsum dolor sit amet consectetur ?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, placeat? Voluptas nihil labore est ad minus, asperiores eius iste quaerat assumenda enim voluptate reprehenderit voluptates perspiciatis optio velit rerum fugit.'   
    },
    {
        question: 'Lorem ipsum dolor sit amet consectetur ?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, placeat? Voluptas nihil labore est ad minus, asperiores eius iste quaerat assumenda enim voluptate reprehenderit voluptates perspiciatis optio velit rerum fugit.'   
    },
]

const Faq: NextPage = () => {
    const [ data, setData ] = useState<Array<IQuestionData>>(testData);
    const sectionRef = useScrollToView();

    const toogleQuestion = (index: number) => {
        setData(data.map((question, index_) => ({...question, isActive: index === index_ && !question.isActive})))
    };

    return (
        <Fragment>
            <Head>{metaTags.faq}</Head>
            <section
                className={classes.faqSection}
                ref={sectionRef}
            >
                <Container>
                    <motion.h1
                        className={classes.title}
                        {...motionOption.left}
                    >
                        <SectionTitleIcon />
                        FAQs
                        <p className={classes.description}>Frequently Asked Questions</p>
                    </motion.h1>
                    { data.map(({ answer, question, isActive }, index) => (
                        <motion.div
                            key={index}
                            onClick={() => toogleQuestion(index)}
                            className={classNames(classes.questionGroup, {
                                [classes.isActive]: isActive
                            })}
                            {...motionOption.right}
                        >
                            <div className={classes.question}>
                                <div className={classes.text}>
                                    <div className={classes.square}/>
                                    <p>{question}</p>
                                </div>
                                <ArrowOpenIcon
                                    {...(isActive && { rotate: 180 })}
                                />
                            </div>
                            <Conditional condition={isActive}>
                                <motion.div
                                    className={classes.answer}
                                    {...motionOption.right}
                                >
                                    <p>{answer}</p>
                                </motion.div>
                            </Conditional>
                        </motion.div>  
                    ))}
                </Container>
            </section>
        </Fragment>
    );
};

export default Faq;