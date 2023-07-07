import { metaTags } from "@/constants/metaTags";
import { NextPage } from "next";
import { Fragment } from "react";
import { Container } from "@/sharedComponents/Container";
import { motion } from 'framer-motion';
import { ContentNodeIcon } from "@/public/assets/svgs/ContentNodeIcon";
import { motionOption } from "@/constants/animationOptions";
import { useScrollToView } from "@/hooks/useScrollToView";
import { FormAgent } from "@/pagesComponents/FormAgent";
import Head from "next/head";
import classes from './index.module.css';

const ContactUs: NextPage = () => {
    const sectionRef = useScrollToView<HTMLDivElement>();

    return (
        <Fragment>
            <Head>{metaTags.contactUs}</Head>
            <section ref={sectionRef}>
                <Container>
                    <motion.h1
                        className={classes.title}
                        {...motionOption.left}
                    >
                        <ContentNodeIcon color='#E53E29'/>
                        Contact Us
                    </motion.h1>
                </Container>
            </section>
            <FormAgent />
        </Fragment>
    );
};

export default ContactUs;