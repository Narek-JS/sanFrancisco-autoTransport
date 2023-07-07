export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '';

export const SEARCH_URL = BASE_URL + 'search'; // Api Search;

export const getBlogsApi = (page: number) => BASE_URL  + `category?slug=blogs&page=${page}`; // Api endpoint for Blog list on specific page;
