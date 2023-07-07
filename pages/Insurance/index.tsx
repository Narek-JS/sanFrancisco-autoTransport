import { metaTags } from "@/constants/metaTags";
import { NextPage } from "next";
import { Fragment, ReactNode } from "react";
import { SectionTitleIcon } from "@/public/assets/svgs/SectionTitleIcon";
import { InsuranceFullCoverage } from "@/sharedComponents/sections/InsuranceFullCoverage";
import { useScrollToView } from "@/hooks/useScrollToView";
import { CarIcon } from "@/public/assets/svgs/CarIcon";
import { Container } from "@/sharedComponents/Container";
import { CarInshuranceIcon } from "@/public/assets/svgs/CarInshuranceIcon";
import { EarringIcon } from "@/public/assets/svgs/EarringIcon";
import { FaqIcon } from "@/public/assets/svgs/FaqIcon";
import { WrapperContentNode } from "@/sharedComponents/WrapperContentNode";
import { ImageRounded } from "@/sharedComponents/ImageRounded";
import { TransportServices } from "@/sharedComponents/sections/TransportServices";
import { motion } from 'framer-motion';
import { motionOption } from "@/constants/animationOptions";
import servicesData from '@/TEST_DATA/transport_services_data.json';
import classNames from "classnames";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import classes from './index.module.css';

interface IBlockNode {
    children: ReactNode;
    from?: "left" | "right" | "top" | "bottom";
};

const WhiteBlockNode: React.FC<IBlockNode> = ({ children, from }) => (
    <motion.div
        className={classes.whiteBlockNode}
        {...(from && { ...motionOption[from] })}
    > {children} </motion.div>
);

const Insurance: NextPage = () => {
    const titleRef = useScrollToView<HTMLHeadingElement>();

    return (
        <Fragment>
            <Head>{metaTags.insurance}</Head>
            <h1 className={classes.title} ref={titleRef}>
                <SectionTitleIcon />
                Full Insurance Coverage
            </h1>
            <InsuranceFullCoverage />
            <section>
                <Container>
                    <h2 className={classes.ratesTitle}>
                        <CarIcon />
                        San Francisco Car Transport’s <span> rates are as </span> follows
                    </h2>
                    <div className={classes.ratesContent}>
                        <div className={classes.ratesContentFirsNode}>
                            <WhiteBlockNode from="left">
                                <CarInshuranceIcon />
                                <p className={classes.ratesTextNode}>
                                    For <span>Open</span> Car <span>Transport</span>
                                </p>
                                <p className={classes.ratesTextNode}>
                                    <span>$1,000,000, </span> with <span>cargo</span> from
                                </p>
                                <p className={classes.ratesTextNode}>
                                    $100,000 <span>to</span> $1,000,000
                                </p>
                            </WhiteBlockNode>
                            <WhiteBlockNode from="left">
                                <CarInshuranceIcon />
                                <p className={classes.ratesTextNode}>
                                    For <span>Open</span> Car <span>Transport</span>
                                </p>
                                <p className={classes.ratesTextNode}>
                                    <span>$1,000,000, </span> with <span>cargo</span> from
                                </p>
                                <p className={classes.ratesTextNode}>
                                    $100,000 <span>to</span> $1,000,000
                                </p>
                            </WhiteBlockNode>

                        </div>
                        <WhiteBlockNode from="right">
                            <div className={classes.ratesHelpQuestion}>
                                <Image
                                    alt="inshurance car image"
                                    src='/assets/images/inshuranceImage.png'
                                    width={265}
                                    height={268}
                                    className={classes.inshuranceImage}
                                />
                                <div className={classes.ratesHelpContent}>
                                    <p>If <span>you</span> have any <span>help</span> or <span>question</span> just</p>
                                    <div className={classes.links}>
                                        <Link href='tel:5454'>
                                            <EarringIcon />
                                            Call Us
                                        </Link>
                                        <p>OR</p>
                                        <Link href='/faq'>
                                            <FaqIcon />
                                            FAQs
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </WhiteBlockNode>
                    </div>
                </Container>
            </section>
            <section>
                <Container>
                    <div className={classes.insecureNode}>
                        <WrapperContentNode from='left'>
                            <h2>Hand Us Your Vehicle and Relax</h2>
                            <h3>San Francisco Car Transport</h3>
                            <h4>Your Number One Choice for Shipping Your Vehicle</h4>
                            <p>
                                Our company always takes good care of any vehicle that we ship. That is why we only hire professional and skilled drivers who know enough to safely take your vehicle from place to place. Moreover, our trucks are examined on a regular basis. However, no one can predict what’s going to occur on the road. That is why, when we pick up the vehicle, first, we carefully check it. 
                            </p>
                            <p>
                                If we find any damages or scratches, we note them. If there would be an accident (though the probability is 0.2%) when we ship your car, you don’t need to worry. San Francisco Car Transport provides 100% insurance on all vehicles we ship.
                            </p>
                        </WrapperContentNode>
                        <ImageRounded
                            from='right'
                            src='/assets/images/insecureNodeImage1.png'
                            alt="incurance block Image"
                        />
                    </div>
                    <div className={classNames(classes.insecureNode, classes.insecureNodeRevers)}>
                        <WrapperContentNode from='left'>
                            <h2>Car Transport is Insured with Us</h2>
                            <h3>San Francisco Car Transport</h3>
                            <h4>Feel free to get in touch with our talented crew and ask additional questions</h4>
                            <p>
                                When you trust your car to an auto transport company, you’ve got to be sure it has proper insurance. And we understand that! San Francisco Car Transport can promise you your car will be covered. Over the years, we kept our customers happy. You can check our customers’ reviews on sites like Yelp, Google+ and Yellow Pages. 
                            </p>
                            <p>
                                We assisted thousands of people with their car transport. Just relax and let us do what we do best. With us, you will know no stress. We are looking forward to serving you!
                            </p>
                        </WrapperContentNode>
                        <ImageRounded
                            from='right'
                            src='/assets/images/insecureNodeImage2.png'
                            alt="incurance block Image"
                        />
                    </div>
                </Container>
            </section>
            <TransportServices
                services={servicesData}
                title="Our Car Transport Services"
                backgroundColor="white"
            />
        </Fragment>
    );
};

export default Insurance;