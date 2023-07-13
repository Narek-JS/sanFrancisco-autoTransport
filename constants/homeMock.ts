interface ITransportContent {
    imagePath?: string;
    aboutArt: string;
    title?: string;
    subTitle?: string;
    textes?: Array<{ text: string; dot?: boolean }>;
    link?: {
        url: string;
        text: string;
    }
};

export interface IMockData {
    transportContent: Array<ITransportContent>;
    transportServicesTitle: string;
    transportServices: ITransportContent
};

export const mock = (): IMockData => {
    return {
        transportContent: [
            {
                imagePath: '/assets/images/transportImage1.png',
                aboutArt: 'About Us',
                title: 'Welcome to San Francisco Car Transport',
                subTitle: 'Your Number One Choice for Shipping Your Vehicle',
                textes: [
                    { 
                        text: 'Since our very beginning, we prioritized the ease of use and convenience of our services for our customers. We are dedicated to fulfilling our customer’s needs. We offer Door-to-Door service as a standard way of delivery, at no extra cost to you. We also insure every car we transport to completely put your mind at ease.'
                    },
                    {
                        text: 'Additionally, we offer Open, Enclosed, and Expedited Car Transport services at affordable rates. For all your car shipping needs, San Francisco Car Transport has your covered'
                    }
                ]
            },
            {
                imagePath: '/assets/images/transportImage2.png',
                aboutArt: 'Geography of our services',
                title: 'Auto Transport Nationwide',
                textes: [
                    { 
                        text: 'San Francisco Car Transport is one of the few companies with the capabilities to ship any sort of car anywhere in the US. However, that’s not all that sets us apart from other car transporters'
                    },
                    {
                        dot: true,
                        text: 'San Francisco Car Transport offers nationwide car shipping which includes Alaska and Hawaii'
                    },
                    {
                        dot: true,
                        text: 'Our company is one of the most reliable companies in the US (recommended with thousands of customer reviews)'
                    },
                    {
                        dot: true,
                        text: 'We provide students, military, and senior citizens with great discounts'
                    },
                    {
                        dot: true,
                        text: 'You get high-level customer assistance from our professional team of experts'
                    },
                    {
                        dot: true,
                        text: 'Our live agents get you the absolute best deal for your car shipping'
                    }
                ],
                link: {
                    url: '/',
                    text: 'Read More' 
                }
            }
        ],
        transportServicesTitle: 'Our Car Transport Services',
        transportServices: {
            aboutArt: 'San Francisco Car Transport',
            title: "Free Quote Online",
            textes: [
                {
                    text: "Our services are not only high-quality but also affordable and competitive in the market. If you are looking for affordable and secure vehicle shipping options, you can ",
                },
                {
                    text: "In order to simplify the process for you, we created a tool that allows you to enter your information and receive a free quote right on our website. Provide us just a few details and our live agents will get back to you as soon as possible."
                }
            ]
        }
    };
};