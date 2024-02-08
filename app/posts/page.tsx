
import { getPosts } from "./action";
import PaginationControl from "../../components/pagination";
import PageContent from "./page_content";

export default async function Posts() {
    let { posts, total, skip, limit } = await getPosts(10);
    return (
        <PageContent posts={posts} total={total}
            skip={skip} limit={limit} />
    )
}