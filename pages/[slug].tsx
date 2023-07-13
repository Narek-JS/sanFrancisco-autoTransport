import { LoadingUI } from "@/components/LoadingUI";
import { useGetDynamicDataQuery } from "@/store/dynamicData";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Post } from "@/shared/Post";
import { Redirect } from "@/components/Redirect";
import NotFound from "./404";

const Page: NextPage = () => {
    const { query: { slug } } = useRouter();

    const { isLoading, data, error } = useGetDynamicDataQuery(String(slug), {
        skip: !(Boolean(slug) && String(slug) !== 'undefined')
    });

    if(isLoading) return <LoadingUI type="fullPage" />;

    if(error) return <Redirect to="/404"/>

    if(data?.data?.post?.category.name === 'Blogs') return <Post category="blogs" data={data.data}/>;

    if(data?.data?.post?.category.name === 'News') return <Post category="news" data={data.data}/>;

    return <NotFound />;
};

export default Page;