import { DUMMY_NEWS } from "@/dummyNews"
import Image from "next/image"
export default function NewsDetailPage({params}) {
    const newsSlug = params.slug
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug)
    return (<article className="news-article">
    <header>
            <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={100} height={100}></Image>
            <h1>{newsItem.title}</h1>
            <time dateTime={newsItem.date}>{newsItem.date}</time>
    </header>
    <p>{newsItem.content}</p>
    </article>)
}