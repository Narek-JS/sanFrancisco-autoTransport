import { SEARCH_URL, getBlogsApi } from "./api";

// POST Search
export const sendSearch = (postData: { text: string; page: number }) => fetch(SEARCH_URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
});

// GET Blogs;
export const getBlogs = (page: number) => () => fetch(getBlogsApi(page)).then(res =>res.json()); 
