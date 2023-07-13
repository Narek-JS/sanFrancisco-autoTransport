import { Fragment } from 'react';
import { metaTags } from '@/constants/metaTags';
import { ReviewSection } from '@/components/sections/ReviewSection';
import { Container } from '@/components/Container';
import { WrapperContentNode } from '@/components/WrapperContentNode';
import { SectionTitleIcon } from '@/public/assets/svgs/SectionTitleIcon';
import { Video } from '@/components/Video';
import { ImageRounded } from '@/components/ImageRounded';
import { SubscibeYoutube } from '@/components/SubscibeYoutube';
import { TransportServices } from '@/components/sections/TransportServices';
import { RowForMore } from '@/public/assets/svgs/RowForMore';
import { InsuranceFullCoverage } from '@/components/sections/InsuranceFullCoverage';
import { CalculatedImages } from '@/shared/CalculatedImages';
import { CalculatedSteps } from '@/shared/CalculatedSteps';
import { PostCard } from '@/components/PostCard';
import { HelpSection } from '@/components/sections/HelpSection';
import { motionCustom } from "@/motion";
import { NextPage } from 'next';
import { transport_services_data as servicesData } from '@/TEST_DATA/transport_services_data';
import { useGetLatestNewsQuery } from '@/store/latestNews';
import { useGetLatestBlogsQuery } from '@/store/latestBlogs';
import { mock } from '@/constants/homeMock';
import Head from 'next/head';
import classNames from 'classnames';
import Link from 'next/link';
import classes from './index.module.css';

const Home: NextPage = () => {
  const mockData = mock(); 
  const { data: dataLatestNews }  = useGetLatestNewsQuery(2);
  const { data: dataLatestBlogs } = useGetLatestBlogsQuery(2);

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
              <Video
                id='Azfq5eueWLY'
                from='bottom'
                width="410px"
              />
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
          <motionCustom.h3
          
            className={classes.calculatedSectionTitle}
            from='left'
          >
            How we <span>Calculated</span> your transport <span>Fee</span> 
          </motionCustom.h3>

          <motionCustom.div
            className={classes.calculatedSectionContent}
            from='right'
          >
            <CalculatedImages />

            <div className={classes.calculatedSectionSteps}>
              <CalculatedSteps />
            </div>
          </motionCustom.div>
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
              <motionCustom.h3 from='left'>Latest Blogs</motionCustom.h3>

              <div className={classes.cards}>
                { dataLatestBlogs?.data.map((blog, index) => (
                  <PostCard
                    key={index}
                    date={blog?.created_at || ''}
                    title={blog?.slug || ''}
                    description={blog?.body || ''}
                    imagePath={blog?.image || ''}
                    link={{ url: blog?.slug || '' }}
                    category='blogs'
                    type='square'
                    from='left'
                  />
                ))}
              </div>
            </div>

            <div className={classes.latestArticleNode}>
              <motionCustom.h3 from='right'>Latest News</motionCustom.h3>

              <div className={classes.cards}>
                { dataLatestNews?.data.map((new_, index) => (
                  <PostCard
                    key={index}
                    date={new_?.created_at || ''}
                    title={new_?.slug || ''}
                    description={new_?.body || ''}
                    imagePath={new_?.image || ''}
                    link={{ url: new_?.slug || '' }}
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