import { metaTags } from "@/constants/metaTags";
import { NextPage } from "next";
import { Fragment } from "react";
import { Container } from "@/sharedComponents/Container";
import { motionCustom } from "@/MotionAnimationElements";
import { ContentNodeIcon } from "@/public/assets/svgs/ContentNodeIcon";
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
                    <motionCustom.h1
                        className={classes.title}
                        from="left"
                    >
                        <ContentNodeIcon color='#E53E29'/>
                        Contact Us
                    </motionCustom.h1>
                </Container>
            </section>
            <FormAgent />
        </Fragment>
    );
};

export default ContactUs;