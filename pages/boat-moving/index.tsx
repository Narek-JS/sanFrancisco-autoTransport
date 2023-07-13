import { NextPage } from "next";
import { Fragment } from "react";
import { metaTags } from "@/constants/metaTags";
import { Container } from "@/components/Container";
import { useScrollToView } from "@/hooks/useScrollToView";
import { TrainBoatIcon } from "@/public/assets/svgs/TrainBoatIcon";
import { HelpSection } from "@/components/sections/HelpSection";
import { SectionTitleIcon } from "@/public/assets/svgs/SectionTitleIcon";
import { WrapperContentNode } from "@/components/WrapperContentNode";
import { StarBoatMovingIcon } from "@/public/assets/svgs/StarBoatMovingIcon";
import { motionCustom } from '@/motion';
import Head from "next/head";
import Image from "next/image";
import classes from './index.module.css';

const BoatMoving: NextPage = () => {
    const titleRef = useScrollToView<HTMLHeadingElement>();

    return (
        <Fragment>
            <Head>{metaTags.boatMoving}</Head>
            <h1 className={classes.title} ref={titleRef}>
                <SectionTitleIcon />
                Boat Moving
            </h1>
            <section className={classes.boatMovingSection}>
                <Container>
                    <div className={classes.boatMovingContent}>
                        <div className={classes.movingNode}>
                            <WrapperContentNode from="left">
                                <h2>Hand Us Your Boat and Relax</h2>
                                <h3>San Francisco Car Transport</h3>
                                <h4>Your Number One Choice for Shipping Your Vehicle</h4>
                                <p>
                                    If you’re a boat owner, you understand the struggle of having to move from your hometown to your new home. Moving your stuff with you is easy, but moving your boat definitely isn’t. Especially if you do not have the right equipment for it. Our company specializes in all sorts of auto transportations, including boat moving.
                                </p>
                                <p>
                                    We can transport your boat for you with the best rates in the market. San Francisco Car Transport will safely move your boat or yacht to any location in America. Whichever way you decide to move your boat, we will do it for you.
                                </p>
                            </WrapperContentNode>
                            <motionCustom.div
                                from="right"
                                className={classes.imageDiv}
                            >
                                <Image
                                    alt="Boat Moving image"
                                    src='/assets/images/boatMoving.png'
                                    width={390}
                                    height={320}
                                    className={classes.image}
                                />
                            </motionCustom.div>
                        </div>
                        <div className={classes.descriptionNode}>
                            <div className={classes.text}>
                                <StarBoatMovingIcon />
                                <p>
                                    What <span>You</span> Will <span>Need</span> For Your <span>Boat</span> Moving
                                </p>
                            </div>
                            <div className={classes.text}>
                                <TrainBoatIcon />
                                <p>
                                    <span>So</span> You <span>Will</span> Need <span>To</span> Know
                                </p>
                            </div>
                        </div>
                        <div className={classes.movingNode}>
                            <motionCustom.div
                                from="left"
                                className={classes.imageDiv}
                            >
                                <Image
                                    alt="Boat Moving image"
                                    src='/assets/images/boatMoving1.png'
                                    width={390}
                                    height={320}
                                    className={classes.image}
                                />
                            </motionCustom.div>
                            <WrapperContentNode from="bottom" maxWidth={470}>
                                <h2>What You Will Need For Your Boat Moving</h2>
                                <p>
                                    Before we arrange the pickup and delivery details, we must know certain information about your boat. You will need to know the year of your boat, which model it is, the measurements such as length, height, weight, and beam.
                                </p>
                                <p>
                                    Any information you provide us with helps us pick the best trailer that fits your boat best for secure transportation. Our team looks forward to helping you with your boat moving!
                                </p>
                            </WrapperContentNode>
                            <motionCustom.div
                                from="right"
                                className={classes.imageDiv}
                            >
                                <Image
                                    alt="Boat Moving image"
                                    src='/assets/images/boatMoving2.png'
                                    width={390}
                                    height={320}
                                    className={classes.image}
                                />
                            </motionCustom.div>
                        </div>
                    </div>
                </Container>
            </section>
            <HelpSection />
        </Fragment>
    );
};


export default BoatMoving;