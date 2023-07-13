import { PostCard } from '@/components/PostCard';
import classes from './index.module.css';

interface IProps {
    latestPosts: Array<Record<string, any>>;
    category: "blogs" | "news";
};

const LatestPost: React.FC<IProps> = ({ latestPosts, category }) => {
    return (
        <div className={classes.latestNews}>
            <h2 className={classes.newsTitle}>
                Latest { category === 'blogs' ? "News" : "Blogs"} 
            </h2>
            <div className={classes.wrapperNewCards}>
                { latestPosts.map((news, index) => (
                    <PostCard
                        type='square'
                        category={category === 'blogs' ? "news" : "blogs"}
                        date={news?.created_at || ''}
                        title={news?.slug || ''}
                        description={news?.body || ''}
                        imagePath={news?.image || ''}
                        link={{ url: news?.slug || '' }}
                        key={index}
                        from='right'
                    />
                ))}
            </div>
        </div>
    );
};

export { LatestPost };