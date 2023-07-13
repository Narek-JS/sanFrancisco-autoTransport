import { Container } from '@/components/Container';
import { useEffect, useState } from 'react';
import { LoadingUI } from '@/components/LoadingUI';
import { usePagination } from '@/hooks/usepagination';
import { PostCard } from '@/components/PostCard';
import { Redirect } from '@/components/Redirect';
import { useGetBlogsQuery } from '@/store/blogs';
import { useHydration } from '@/hooks/useHydration';
import { motionCustom } from "@/motion";
import { ContentNodeIcon } from '@/public/assets/svgs/ContentNodeIcon';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import classes from './index.module.css';

const Blogs = () => {
    const hydration = useHydration();
    const { query: { page }, push } = useRouter();
    const [ blogs, setBlogs ] = useState<undefined | Record<string, any>>();
    const {
        currentPage,
        goToPage,
        nextPage,
        prevPage,
        getVisiblePages
    } = usePagination(
        blogs?.data?.pageCount || 1,
        hydration && Number(page) || 1
    );

    const { isLoading, data, error } = useGetBlogsQuery(String(currentPage), {
        skip: !hydration,
    });

    useEffect(() => goToPage(page ? Number(page) : 1), [page]);

    useEffect(() => {
        if(data !== undefined && isLoading === false && hydration) {
            setBlogs(data);
            push(`blogs/?page=${currentPage}`, undefined, { shallow: true });
        };
    }, [data]);

    if(error) return <Redirect to='404' />;

    if(isLoading) return <LoadingUI type='fullPage'/>;

    return (
        <section className={classes.blogsSection}>
            <Container>
                <motionCustom.h1
                    className={classes.title}
                    from='left'
                >
                    <ContentNodeIcon color='rgb(229, 62, 41)' />
                    Blogs
                </motionCustom.h1>
                <div className={classes.wrapperBlogs}>
                    { blogs?.data?.posts.map((blog, index) => (
                        <PostCard
                            type='shadow'
                            category='blogs'
                            date={blog?.created_at || ''}
                            title={blog?.slug || ''}
                            description={blog?.body || ''}
                            imagePath={blog?.image || ''}
                            link={{ url: blog?.slug || '', text: 'Continue Reading' }}
                            key={index}
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

export default Blogs;