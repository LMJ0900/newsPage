
import { DUMMY_NEWS } from "@/dummyNews"
import NewsList from "@/components/newsList"
export default function NewsPage() {
    return (<>
    <h1>News Page</h1>
   <NewsList news={DUMMY_NEWS}></NewsList>
    </>)
}