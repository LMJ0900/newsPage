import Image from "next/image"
import Link from "next/link"
export default function NewsList({news}){
    return(
     <ul className="news-list">
        {news.map(newsItem => (<li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
            <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={224} height={254}></Image>
            <span>{newsItem.title}</span>
            </Link>
        </li>))}
    </ul>
    )
}