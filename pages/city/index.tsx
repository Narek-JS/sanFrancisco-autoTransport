import { Fragment } from 'react';
import { metaTags } from '@/constants/metaTags';
import { cities_data } from '@/TEST_DATA/cities_data';
import { Container } from '@/components/Container';
import { ContentNodeIcon } from '@/public/assets/svgs/ContentNodeIcon';
import { useHydration } from '@/hooks/useHydration';
import { Conditional } from '@/components/Conditional';
import { GoogleMapComponent } from '@/components/GoogleMap';
import { UnderLineSvg } from '@/public/assets/svgs/UnderLineSvg';
import { RowForMore } from '@/public/assets/svgs/RowForMore';
import { Redirect } from '@/components/Redirect';
import { useScrollToView } from '@/hooks/useScrollToView';
import useWindowSize from '@/hooks/useWindowSize';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import classes from './index.module.css';

interface IProps {};

const City: React.FC<IProps> = () => {
    const { width } = useWindowSize();
    const hydration = useHydration();
    const sectionRef = useScrollToView<HTMLDivElement>();
    
    const currentCity = hydration ? cities_data[0] : {} as any;
    const otherCities = [
        {
            id: 0,
            name: 'Alameda, California',
            imagePath: '/assets/images/city1.png',
            description: currentCity?.description,
        },
        {
            id: 1,
            name: 'Alameda, California',
            imagePath: '/assets/images/city1.png',
            description: currentCity?.description,
        }
    ];

    const getHeight = (): number => {

        if(Number(width) > 1250) return 0;

        const maxMargin = 250;  // Set the maximum height value;
        const minMargin = 0;    // Set the minimum height value;

        const minWidth  = 768;  // Set the minimum window width;
        const maxWidth  = 1250; // Set the maximum window width;

        const height = maxMargin - ((Number(width) - minWidth) / (maxWidth - minWidth)) * (maxMargin - minMargin);

        return height;
    };

    if(Number(width) <= 768) return <Redirect to='/404' />;

    return (
        <Fragment>
            <Head>{metaTags.quote}</Head>
            <section
                className={classes.citySection}
                ref={sectionRef}
            >
                <Container>
                    <div
                        className={classes.content}
                        style={{ marginBottom: getHeight() + 'px' }}
                    >
                        <div className={classes.currentCityContent}>
                            <h1 className={classes.title}>
                                <ContentNodeIcon color='hsla(7, 78%, 53%, 1)'/>
                                San Francisco to {currentCity?.name}
                            </h1>
                            <Conditional condition={currentCity?.imagePath}>
                                <Image 
                                    alt={`city ${currentCity?.name}`}
                                    src={currentCity?.imagePath}
                                    width={900}
                                    height={405}
                                    className={classes.currentCityImage}
                                />
                            </Conditional>
                            <UnderLineSvg style={{ marginBottom: "20px" }}/>
                            <div className={classes.currentCityBody}>
                                <Conditional condition={currentCity?.description}>
                                    <p dangerouslySetInnerHTML={ { __html: currentCity?.description }} />
                                </Conditional>
                            </div>
                        </div>
                        <div className={classes.otherCities}>
                            <h2 className={classes.otherCitiesTitle}>
                                Other Cities
                            </h2>
                            { otherCities.map((city) => (
                                <div key={city.id} className={classes.otherCityBlock}>
                                    <Image
                                        alt={`city ${city.name}`}
                                        src={city.imagePath}
                                        width={280}
                                        height={236}
                                        className={classes.otherCityImage}
                                    />
                                    <div className={classes.otherCityContetn}>
                                        <p className={classes.otherCityName}>
                                            {city.name}
                                        </p>
                                        <p
                                            dangerouslySetInnerHTML={{ __html: city.description }}
                                            className={classes.otherCityDescription}
                                        />
                                        <Link href='/' className={classes.otherCityLink}>
                                            <RowForMore />
                                            Continue Reading
                                        </Link>
                                    </div> 
                                </div>
                            ))}
                        </div>
                    </div>
                    <GoogleMapComponent />
                    <UnderLineSvg />
                </Container>
            </section>
        </Fragment>
    );
};

export default City;