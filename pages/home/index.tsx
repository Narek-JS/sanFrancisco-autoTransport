import { Fragment } from 'react';
import { metaTags } from '@/constants/metaTags';
import { ReviewSection } from '@/sharedComponents/sections/ReviewSection';
import { Container } from '@/sharedComponents/Container';
import { WrapperContentNode } from '@/sharedComponents/WrapperContentNode';
import { SectionTitleIcon } from '@/public/assets/svgs/SectionTitleIcon';
import { Video } from '@/sharedComponents/Video';
import { ImageRounded } from '@/sharedComponents/ImageRounded';
import { SubscibeYoutube } from '@/sharedComponents/SubscibeYoutube';
import { TransportServices } from '@/sharedComponents/sections/TransportServices';
import { mock } from './mock';
import { RowForMore } from '@/public/assets/svgs/RowForMore';
import { InsuranceFullCoverage } from '@/sharedComponents/sections/InsuranceFullCoverage';
import { CalculatedImages } from '@/pagesComponents/CalculatedImages';
import { CalculatedSteps } from '@/pagesComponents/CalculatedSteps';
import { PostCard } from '@/sharedComponents/PostCard';
import { HelpSection } from '@/sharedComponents/sections/HelpSection';
import { motion } from 'framer-motion';
import { motionOption } from '@/constants/animationOptions';
import { NextPage } from 'next';
import servicesData from '@/TEST_DATA/transport_services_data.json';
import latestArticles from '@/TEST_DATA/latest_articles.json'
import Head from 'next/head';
import classNames from 'classnames';
import Link from 'next/link';
import classes from './index.module.css';

const Home: NextPage = () => {
  const mockData = mock(); 

  return (
    <Fragment>
      <Head>{metaTags.home}</Head>
      <ReviewSection />
      <section className={classes.transportSection}>
        <Container>
          <div className={classes.transportContent}>
            { mockData.transportContent.map((data, index) => (
              <div key={index} className={classNames(classes.transportArtNode, {
                [classes.rowRevers]: index % 2 !== 0
              })}>
                <WrapperContentNode from={ index % 2 !== 0 ? 'right' : 'left' }>
                  <h2>{data.aboutArt}</h2>
                  <h3>{data.title}</h3>
                  { data.subTitle && <h4>{data.subTitle}</h4>}
                  { data?.textes?.map(({ text, dot }, indexText) => (
                    <p key={indexText} className={classNames({'dott': dot})}>{text}</p>
                  ))}
                  { data.link && (
                    <Link href={data.link.url}>
                      <RowForMore />
                      {data.link.text}
                    </Link>
                  )}
                </WrapperContentNode>
                <ImageRounded
                  from={ index % 2 !== 0 ? 'left' : 'right' }
                  src={data?.imagePath || ''}
                  alt="transport Image"
                />
              </div>
            ))}
          </div>
          <div className={classes.transportServicesTitle}>
            <SectionTitleIcon />
            <h3>{mockData.transportServicesTitle}</h3>
          </div>
          <div className={classes.transportServices}>
            <WrapperContentNode from='left'>
              <h2>{mockData.transportServices.aboutArt}</h2>
              <h3>{mockData.transportServices.title}</h3>
              { mockData?.transportServices?.textes?.map(({ text, dot }, indexText) => (
                <p key={indexText} className={classNames({'dott': dot})}>{text}</p>
              ))}
            </WrapperContentNode>
            <div className={classes.transportServicesSeccondBlock}>
              <Video id='Azfq5eueWLY' from='bottom' />
              <SubscibeYoutube
                link='https://www.youtube.com/watch?v=Azfq5eueWLY'
                from='right'
              />
            </div>  
          </div>
        </Container>
      </section>

      <TransportServices services={servicesData}/>
      <InsuranceFullCoverage />

      <section className={classes.calculatedSection}>
        <Container>
          <motion.h3
            className={classes.calculatedSectionTitle}
            {...motionOption.left}
          >
            How we <span>Calculated</span> your transport <span>Fee</span> 
          </motion.h3>

          <motion.div
            className={classes.calculatedSectionContent}
            {...motionOption.right}
          >
            <CalculatedImages />

            <div className={classes.calculatedSectionSteps}>
              <CalculatedSteps />

              <Link href='/' className={classes.calculatedSectionStepsLink}>
                <RowForMore />
                Read More
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className={classes.latestArticlesSection}>
        <Container> 
          <div className={classes.latestArticlesTitle}>
            <SectionTitleIcon />
            <h3>Our Latest Articles</h3>
          </div>

          <div className={classes.latestArticlesContent}>
            <div className={classes.latestArticleNode}>
              <motion.h3 {...motionOption.left}>Latest Blogs</motion.h3>

              <div className={classes.cards}>
                { latestArticles.blogs.map((blog, index) => (
                  <PostCard
                    key={index}
                    {...blog}
                    category='blogs'
                    type='square'
                    from='left'
                  />
                ))}
              </div>
            </div>

            <div className={classes.latestArticleNode}>
              <motion.h3 {...motionOption.right}>Latest News</motion.h3>

              <div className={classes.cards}>
                { latestArticles.news.map((new_, index) => (
                  <PostCard
                    key={index}
                    {...new_}
                    category='news'
                    type='square'
                    from='right'
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <HelpSection />
    </Fragment>
  );
};


export default Home;