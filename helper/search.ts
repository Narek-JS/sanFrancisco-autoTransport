import { ISearchData } from "@/store/search";

type FindMessage = {
    slug: string;
    title: string; 
};


const getPagesData = (pages: Array<Record<string, any>>) => (
    pages.map(({ slug, title }) => ({slug, title}))
);

const getPosts = (posts: Array<Record<string, any>>, searchText: string): Array<{
    slug: string,
    title: string
}> => posts.map(post => {
    // Get URL;
    const urlParts = [post.category?.slug, post.slug].filter(Boolean);
    const url = urlParts.join('/');

    // Get Tilte;
    let title = post.title || '';
    if (post.body && typeof post.body === 'string' && post.body.includes(searchText)) {
        const bodyWithoutTags = post.body.replace(/<[^>]+>/g, '').replace(/&[^;]+;/g, '');
        const pattern = new RegExp(`\\b(?:\\w+\\W+){0,5}(${searchText})(?:\\W+\\w+){0,5}\\b`, 'gi');
        const match = pattern.exec(bodyWithoutTags);
        if (match) {
            title = match[0];
        }
    }

    // result
    return { slug: url, title: title };
});

export const getSearchAdaptedData = (data: any, searchText: string): ISearchData => ({
    pages: getPagesData(data?.data?.pages || []),
    postByCategory: getPosts(data?.data?.postByCategory || [], searchText),
    posts: getPosts(data?.data?.posts || [], searchText),
    empty: data?.data?.empty
});


export const scrollIsArriveBottom = (position: number, element: HTMLDivElement): boolean => (
    position > 0 && (position + element?.clientHeight! >= element?.scrollHeight! - 100)
);