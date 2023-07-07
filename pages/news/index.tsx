import { Container } from '@/sharedComponents/Container';
import { useEffect, useState } from 'react';
import { LoadingUI } from '@/sharedComponents/LoadingUI';
import { usePagination } from '@/hooks/usepagination';
import { PostCard } from '@/sharedComponents/PostCard';
import { Redirect } from '@/sharedComponents/Redirect';
import { useGetNewsQuery } from '@/store/news';
import { useHydration } from '@/hooks/useHydration';
import { motion } from 'framer-motion';
import { ContentNodeIcon } from '@/public/assets/svgs/ContentNodeIcon';
import { useRouter } from 'next/router';
import { motionOption } from '@/constants/animationOptions';
import classNames from 'classnames';
import classes from './index.module.css';

const News = () => {
    const hydration = useHydration();
    const { query: { page }, push } = useRouter();
    const [ news, setNews ] = useState<undefined | Record<string, any>>();
    const {
        currentPage,
        goToPage,
        nextPage,
        prevPage,
        getVisiblePages
    } = usePagination(
        news?.data?.pageCount || 1,
        hydration && Number(page) || 1
    );

    const { isLoading, data, error } = useGetNewsQuery(String(currentPage), {
        skip: !hydration,
    });

    useEffect(() => goToPage(page ? Number(page) : 1), [page]);

    useEffect(() => {
        if(data !== undefined && isLoading === false && hydration) {
            setNews(data);
            push(`news/?page=${currentPage}`, undefined, { shallow: true });
        };
    }, [data]);

    if(error) return <Redirect to='404' />;

    if(isLoading) return <LoadingUI type='fullPage'/>;

    return (
        <section className={classes.newsSection}>
            <Container>
                <motion.h1
                    className={classes.title}
                    {...motionOption.left}
                >
                    <ContentNodeIcon color='rgb(229, 62, 41)' />
                    News
                </motion.h1>
                <div className={classes.wrapperNews}>
                    { news?.data?.posts.map((new_, index) => (
                        <PostCard
                            type='shadow'
                            category='news'
                            date={new_?.created_at || ''}
                            title={new_?.slug || ''}
                            description={new_?.body || ''}
                            imagePath={new_?.image || ''}
                            link={{ url: new_?.slug || '', text: 'Continue Reading' }}
                            key={index}
                            from='skew'
                        />
                    ))}
                </div>
                <div className={classes.paginationBtns}>
                    <button className={classes.btn} onClick={prevPage}>
                        Previous
                    </button>
                    { getVisiblePages().map((pageNumber) => (
                        <button
                            key={pageNumber}
                            className={classNames(classes.btn, {
                                [classes.btnActive]: currentPage === pageNumber
                            })}
                            onClick={() => goToPage(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    ))}
                    <button className={classes.btn} onClick={nextPage}>
                        Next
                    </button>
                </div>
            </Container>
        </section>
    );
};

export default News;