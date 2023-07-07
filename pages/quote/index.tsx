import { metaTags } from "@/constants/metaTags";
import { NextPage } from "next";
import { Fragment } from "react";
import { Container } from "@/sharedComponents/Container";
import { WrapperContentNode } from "@/sharedComponents/WrapperContentNode";
import { ImageRounded } from "@/sharedComponents/ImageRounded";
import { CarefulIcon } from "@/public/assets/svgs/CarefulIcon";
import { RowForMore } from "@/public/assets/svgs/RowForMore";
import { motion } from 'framer-motion';
import { motionOption } from "@/constants/animationOptions";
import { FormAgent } from "@/pagesComponents/FormAgent";
import { InsuranceFullCoverage } from "@/sharedComponents/sections/InsuranceFullCoverage";
import { TransportServices } from "@/sharedComponents/sections/TransportServices";
import servicesData from '@/TEST_DATA/transport_services_data.json';
import Link from "next/link";
import Head from "next/head";
import classNames from "classnames";
import classes from './index.module.css'


const Quote: NextPage = () => {
    return (
        <Fragment>
            <Head>{metaTags.quote}</Head>
            <section className={classes.quoteSection}>
                <Container>
                    <div className={classes.quoteNode}>
                        <WrapperContentNode from="left">
                            <h2>Easy on Every Step</h2>
                            <h3>San Francisco Car Transport</h3>
                            <h4>Your Number One Choice for Shipping Your Vehicle</h4>
                            <p>
                                When finding the right company for you online, the first thing you are thinking about is how to get in touch to ask a question. And yes, that’s what everyone thinks of the first. For that particular reason, San Francisco Car Transport created FREE quote service.
                            </p>
                            <p>
                                It will give you the fastest and easiest way to get in touch with us. Below you will find the needed information to request a quote from San Francisco Car Transport.
                            </p>
                            <p className={classes.red}>
                                Getting a FREE quote is easy with us. Here is the main information that is required when filling out the form
                            </p>
                        </WrapperContentNode>
                        <ImageRounded
                            alt="getting a free qoute image"
                            src="/assets/images/qouteImage1.png"
                            from="right"
                        />
                    </div>
                    <div className={classNames(classes.quoteNode, classes.quoteNodeRevers)}>
                        <WrapperContentNode from="right">
                            <h2>Provide Information </h2>
                            <p>
                                <span>Pickup and Delivery Locations </span> 
                                – your pickup and delivery locations must be clear for us. From and to where is headed your vehicle.
                            </p>
                            <p>
                                <span>Year/Make/Model of the Vehicle </span> 
                                – a must, when filling out our form. It will be easier for us to get a quote for you.
                            </p>
                            <p>
                                <span>Transport type </span> 
                                – the type can have an impact on the price of your shipping. There are various types of services, each of them is priced differently.
                            </p>
                            <p>
                                <span>The condition of the Vehicle </span> 
                                – another thing that is under a consideration. Running vehicle is easier to load while non-running ones usually take more time and effort.
                            </p>
                            <p>
                                <span>Pickup date </span> 
                                – also, an important data to help our agents get the closest date to your desired one.
                            </p>
                            <p>
                                <span>Phone Number/Name/ Email Address </span> 
                                – a needed information from our supervisor. He/she will get back to you and will know your name.
                            </p>
                        </WrapperContentNode>
                        <ImageRounded
                            alt="getting a free qoute image"
                            src="/assets/images/qouteImage2.png"
                            from="left"
                        />
                    </div>
                    <div className={classes.paymentInformation}>
                        <motion.div {...motionOption.left}>
                            <CarefulIcon />
                            <p>It is important to pay attention that San Francisco Car Transport doesn’t collect any kind of personal or payment information.</p>
                        </motion.div>
                        <motion.div {...motionOption.right}>
                            <Link href='/'>
                                <RowForMore color='#E53E29'/>
                                Read More
                            </Link>
                        </motion.div>
                    </div>
                    <div className={classes.quoteNode}>
                        <WrapperContentNode from="right">
                            <h2>How Long to Wait and How to Make a Payment?</h2>
                            <p>
                                <span>For the 1st question </span> 
                                – San Francisco Car Transport is one of the companies that value customer’s time and money. And, for that reason, we reply to your request as soon as possible and even immediately. Over the years, in business, we understood the importance of the waiting time.
                            </p>
                            <p>
                                <span>What about the 2nd question </span> 
                                – San Francisco Car Transport avoids online payments (on the website) because they are risky, and we don’t want our customers to feel even a little insecure about our service. For that, we only accept phone, email, and fax information.
                            </p>
                            <p>
                                <span />
                                For all orders placed through San Francisco Car Transport, a minimum of $100.00 deposit is required depending on the size and condition of the vehicle. Also, a deposit placed through us is refundable to you if you cancel the order and at the time of cancellation, no carrier had been assigned to that order.
                            </p>
                        </WrapperContentNode>
                        <ImageRounded
                            alt="getting a free qoute image"
                            src="/assets/images/qouteImage3.png"
                            from="left"
                        />
                    </div>
                </Container>
            </section>
            <FormAgent />
            <InsuranceFullCoverage />
            <TransportServices
                services={servicesData}
                title="Our Car Transport Services"
                backgroundColor="white"
            />
        </Fragment>  
    );
};

export default Quote;